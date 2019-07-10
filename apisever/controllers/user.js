// 用户相关的控制器代码
const UserModel = require("../models/User");
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
/**
 * 修改用户头像
 */
const postUpdAvatar = (req, res) => {
  // 1. 得到用户传递过来的文件，并做移动到 public 目录下操作
  // console.log(req.file);
  // 1.1 设置文件的名字
  let newFileName = new Date().getTime() + "_" + req.file.originalname;
  // 1.2 设置文件移动的路径
  let newPath = path.resolve(__dirname, "../public/", newFileName);
  // 1.3 读文件
  let fileData = fs.readFileSync(req.file.path);
  // 1.4 写文件
  fs.writeFileSync(newPath, fileData);

  // 2. 将数据库中当前用户的头像给更新了
  // 2.1 得到用户id
  let userId = req.body.userId;
  let newAvatar = `http://106.52.35.247:9090/${newFileName}`;
  // 2.2 更新数据库
  UserModel.updateOne(
    {
      _id: userId
    },
    {
      avatar: newAvatar
    }
  )
    .then(data => {
      if (data.nModified > 0) {
        res.send({
          code: 0,
          msg: "更新头像成功",
          data: newAvatar
        });
      } else {
        res.send({
          code: -1,
          msg: "更新头像失败"
        });
      }
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
};

/**
 * 注册
 * 密码进行加盐处理
 */
const postSignUp = (req, res) => {
  // 1. 检验参数信息 略
  // 2. 创建用户
  UserModel.findOne({
    username: req.body.username
  }).then(data => {
    if (data) {
      res.send({
        code: -1,
        msg: "用户名存在"
      });
    } else {
      //加密 加盐
      let hashPassword = bcryptjs.hashSync(req.body.password, 10);
      req.body.password = hashPassword;
      let user = new UserModel(req.body);
      user
        .save()
        .then(data => {
          // console.log(data)
          res.send({
            code: 0,
            msg: "注册成功"
          });
        })
        .catch(error => {
          // console.log(error.message);
          res.send({
            code: -1,
            msg: "网路异常，请稍后重试"
          });
        });
    }
  });
};

/**
 * 登录
 */
const postSignIn = (req, res) => {
  // 1. 校验用户信息 略
  // 2. 查找是否有这个人存在
  let username = req.body.username;
  let password = req.body.password;
  UserModel.findOne({
    username
  })
    .then(data => {
      // console.log(data);
      if (data) {
        let isOk = bcryptjs.compareSync(password, data.password);
        if (isOk) {
          let token = jwt.sign(
            {
              userId: data._id,
              username: data.username
            },
            "XSF"
          );
          res.send({
            code: 0,
            msg: "ok",
            data: {
              userId: data._id,
              nickname: data.nickname,
              avatar: data.avatar
            }
          });
        } else {
          //密码错误
          res.send({
            code: -1,
            msg: "账号或密码错误"
          });
        }
      } else {
        res.send({
          code: -2,
          msg: "账号或密码错误"
        });
      }
    })
    .catch(data => {
      res.send({
        code: -1,
        msg: "网络异常..."
      });
    });
};

module.exports = {
  postSignUp,
  postSignIn,
  postUpdAvatar
};
