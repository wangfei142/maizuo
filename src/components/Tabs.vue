<template>
  <nav class="tabs border-top">
    <li class="tab">
      <router-link to="/films">
        <i></i>
        <span>电影</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/cinemas">
        <i></i>
        <span>影院</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/act">
        <i></i>
        <span>特惠</span>
      </router-link>
    </li>

    <li class="tab">
      <router-link to="/center">
        <i></i>
        <span>我的</span>
      </router-link>
    </li>
  </nav>
</template>

<script>
export default {
  name: "app-tabs"
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/common/px2rem.scss";
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  .tab {
    flex: 1;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      i {
        display: block;
        background-size: 20px;
        width: 20px;
        height: 20px;
        margin: 0 auto;
        margin-top: 6px;
      }
      span {
        display: block;
        font-size: 12px;
        color: #666;
        text-align: center;
      }
      &.router-link-active span {
        color: #b4282d;
      }
    }
  }
  .tab:nth-of-type(1) {
    a i {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA8FBMVEVHcEx5foN6fYR5f4J5fYJ5fYX///95fYN/f4t/f/95fYJ5fYOZmZl5fYJ/f4d8f4J5fYJ6foJ5f4J5fYJ6foJ5fYJ5fYJ5foJ/f5l6foJ6fYN5fYJ6foJ6fYR7g4N5fYJ8f4J9fYJ6fYJ5foJ6hIR6fYJ7foN5foJ5fYJ5fYJ6hIR/f5F5fYJ7f4N5fYJ5foOGhoZ/f4x5hYV5fYJ5fYJ5fYJ7foN6foJ/f6p5fYJ5fYV6fYKIiIh5fYJ5fYJ5foJ5foJ5fYJ5fYJ8goJ5fYJ5fYJ6fIN5fYN5fYN5fIN8goJ6foJ6fYN/f4l5f4J5fYL6aFRvAAAAT3RSTlMAZ25Q7EEBsRYC+oYF3SBM/X1W88D2xXEKd46iuk0hv0oz05UZZlmy5swbDuFA62MTFBek7+5bvgb5P+oP4vK0tuWoJcvf69qz8TF7rxpauYn0+gAAAeZJREFUOMuVVVd74kAMHNzWhpiYYjAthGJagNxBQku53sv8/39zD07itXEOW287q28lzUojIGKeOhhPJ/vJdDxQPbxu1ki4DM0VI+sVz8s+6dQand5wN+x1GjWH7F8mOV50SdtfScjKt8nuxZHnQeNSOYuBZ8qS2iEG5vIUVwmx7gXzuagnWUguwSqQsu8iz+vwVCytS8XweM38IqxIYyG8Oq+QrJyHQIHaS21dCuPl4q3G1qZF7U2Yg2D3mU/eSRWV2QbQZjmErpYM+LX6VKS862wCaLIuYQr7FgD8pS3zqXNuwnygLvNrcwQAgr7MjlHl7faGVUMGfQoAnuuYESZNQVLEMMf1AJW1OO0zfRaHalSBARtPLJXreiQqDL1efuKswQEwZidgXiNZleOaVZJa8BcdjoEpewBQrLDdfKCQXAXnzTYrRQDocQpMOASAEluAecMwyxlvTaDFEgAMOQH23AHAmhsAW4lOnVsAG64BYMf90at//vNqhlwzMJCB1wy/5bnO6mQPrBzXS9lZuaDeUVK/zhP7NcMUnJ6t++fZAroUVrqJzaIDJ9XlENMsI5VmZVFCYKHxLkFfv/LHr5/Jqh3pLN8OlsI35dPpXfD4+Pn77y8k36fbMJb68cO74zLS7q0T9g/dKmZUv7wXgQAAAABJRU5ErkJggg==");
    }
    a.router-link-active i {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA8FBMVEVHcEz/YBb/Xxf/Xxb/Xxb/Yhf/////Xxf/aBf/f3//Xxb/Xxb/ZjP/Xxf/Xxf/YRf/Xxb/Xxb/YRf/Xxb/Xxb/Xxb/Xxb/YRb/Zhn/YBf/Xxf/YBb/Xxf/YBf/ZBf/YBb/YBj/Xxn/Xxb/Xxb/Zh7/Xxb/YRb/Xxb/Xxb/Xxb/Zxz/bST/Xxb/Xxf/Xxb/Xxf/axr/Zhn/Yxb/YBf/YBb/Xxb/Xxb/Xxb/fyr/Xxb/YRj/Xxb/ZiL/Xxb/Xhb/YBb/Xxb/Xxb/Xxb/YBv/Xxb/Xxb/Xxb/YBb/YBb/Xxb/Yhr/Xxb/YBf/Yh3/YBb/XxbRpm7XAAAAT3RSTlMAZ25Q7EEBsRYChvoF3SBM/X1W88DF9nEKd7qijk0hv0oz05UZZlmy5swbDuFA62MTFBek777uWwb5P+oP4vK05baoJcuz2uvfezHxrxpasU+NwAAAAeZJREFUOMuVVVd74kAMHHBZG2JimjEthGJagNxBCCXlei/z///NPTiJ18Y523rbWX0raVYaASFzleFkNj1MZ5Oh4uJ1M8fCYWCOGJuveF4OSLve7PZH+1G/26zb5OAyzvGiR1reWkLWnkX2Lk48jypX+bMIeJZfUT1GwFyR4iom1r1gMRf2JAvxJZgFUvZdFnkdnErlTbkUHK9ZXAYVqSwEV+dVktXzAChQfamtR6G/XLxV2d61qb4JchDsPfPJO6miClsAWqwE0NWKPr/mgHkp7wY7ADpsSFieAxMA/tKS+dS4MGA8UJP5tTgGAEFPZkev8XZ7w5ougx4FANexjRCThiApIpjtuIDCepT2uTaPQnUqwJDNJ5YqDS0UFbrWqDxx1uQQmLDrM6+SrMlxjRpJ1f+LLifAjH0AKFXZ6jxQSK6Ci06L1RIA9DkDphwBQJltwLhhkOWctwbQZhkARpwCB+4BYMMdgK1Ep8YtgB03ALDn4eTVP/95NUOuGRjIwGuG33Ide53YA2vbcVN2Vs6vdxzXr4vYfs0wBcmzdf88W0CPwkw3sVl0IFFdjhHN0lNpVhYlBJYq72L09Rt//fgZr9qhzvIsfyl8zX9K3gWPj5+//P5O8kO6DWMqH9+/Oy0j7d5KsH/ddGZU6YjB5wAAAABJRU5ErkJggg==");
    }
  }
  .tab:nth-of-type(2) {
    a i {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA6lBMVEVHcEx5fYN6hIR5foKZmZl/f/95fYJ5fYJ5fYJ5fYJ5foJ8goJ7foN5fYJ/f5F6foJ5fYJ5fYJ7f4N6foKNjY16foJ9fYZ5fYJ5fYJ6fYJ5fYJ6fYR/f4h5fYN6f4R5fYJ9fYZ5fYJ5fYJ6foJ5fYN/f4Z5fYV6foJ5fYJ5fYN/f4x7f4N5fYKRkZF5fYJ/f5l5fYN5f4J5fYJ9fYJ6foJ5fYJ5foJ5fYJ5foJ5fYJ5hYX///97fYN5foJ5fYJ6fYR8goKHh4d6fYR6fYKLi4t5fYJ7fYN5fYJ8f4J5fYJ6f4J6fYOIiIh5fYJjB2qDAAAATXRSTlMAfBmyBQLz/ub7rCVfpg57+cs+iQnENdz0mLdRHIo43jnf7cB2JD13/bMURKQH+ArUVPEzvL1v78rDFQFyxvdNJxFHnAuZdOdKzF6lDxbVfRkAAAEcSURBVDjL7dLXbsJAFATQcV9jg43pvff03ntP5v9/Jw9gAgHb5AFFijKve6S9u3eAdcVTBEMjFG8sJYOR6TsA4BluWw6/Vu65/S4Ahe3oGXtUAAjK0VSmAECu8nTyn66farFcdv48m4tpS6lD5q9n4PmFSzrLaNU0iuT9rS+7l2TMMKuLNFFjBU9XzD/enanb+0cn5PMLKqwlFmicSRWwitM2H0sPgPrK9+/Upm4BAG5Sp3vm1s7G7iYAwNL5Nk87Ou3lv2RT78xSNcl40I+OJ5vSFBuJIPrRYOqLjgyzHryoummMfDoUlMKWKlEMJ3TAlhZGtRYHE8pmObwr5SZ9WorqVcmnhegOFkgAh5l0NE1nDvBnwxXzM/rL+QQoFmWj/JD7rwAAAABJRU5ErkJggg==");
    }
    a.router-link-active i {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA6lBMVEVHcEz/YBb/Zh7/Xxb/ZjP/f3//Xxb/Xxb/Xxb/Xxb/YBb/YBv/Xxf/YBj/bST/Xxb/Xxb/Xxb/Yhj/YBb/cRz/YBb/YBj/Xxb/Xxb/Xxf/YBb/ZBv/YRb/YBb/Xxb/Xxb/Yhb/YBb/Xxb/Xxb/Xxf/Yxz/YBn/Xxb/YBf/Xxb/YRb/Zhn/YBf/YBf/YBb/bST/Xxb/Xxb/Xxn/YRj/Zhn/Xxb/Xxb/Xxb/YRj/Xxb/YBb/////Xxf/YBb/aR7/YBn/Yhr/Xxf/YBf/YBb/YBb/cxf/YBj/YBj/YBb/Xxf/Xxb/YRj/ZiL/XxbA9t/yAAAATXRSTlMAfBmyBQLz/ub7rCWmXw57+cs+iQnENdz0mLccUYo43jnfwO12JD39d7NEFKS8bwfU8TNUCvi9yhXD7wHGchFHJ5lNnPcLSnTnpcxeD2lN0mwAAAEcSURBVDjL7dLXcsIwFATQdZVswDa99w7pvfee7P//Th7ABALY5IHJTCb7qjOjK90F1pWEJhkYqSVGUhEMTdcFgITwWmrwtWrP63YAaGyFz9ijBkBSDacqJQBylaeT/3T91LCzmdnzTNY2FlKXzN1NwfNLj3QX0YolCuT9lS87F6QtrMo8daos4/mBudvrE/1gb+uYfHlCmVVnjkYZ14FIYdLmM+UR0N/4+p3GaEYAADfJ013rcGdjfxsAEDH5PkvbJmOLfylGsz1N9Tijy350NNmEJll3ltGPOpNfdCCs2vJF1Swx8OlQUglaqkI5HNM+G0YQNRrsjymbxeCuFJv0aSmsVyWf5sM7mCcBHKVT4TSV3sSfDVfMz+gv5xMwK2WjDeLAxgAAAABJRU5ErkJggg==");
    }
  }
  .tab:nth-of-type(3) {
    a i {
      background-image: url("data:image/png;base64,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");
    }
    // a.router-link-active i{
    //      background-image: url('');
    // }
  }
  .tab:nth-of-type(4) {
    a i {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABuVBMVEVHcEx5fYKqqqp5fYJ/f5R5fYN5hYX///9/f/95fYJ/f59/f5l5fYJ/f4Z5fYJ5foJ5fYJ5fYJ5foJ5fYJ6fYJ5fYJ7foR6fYKRkZF5fYV6f4J6f4J5fYN/f4p5fYJ5f4V6fYJ5foN5foN6fYR5fYN/f797foN9fYJ5fYJ8f4J6foJ/f5F5fYN6foJ/f6p5fYJ7f4N9fYZ5foJ5fYN5fYJ6fYJ/f415fYJ5f4J5fYJ/f4h5fYN5fYJ5fYN5foN5fYN5fYJ6f4J7g4N5fYJ5foKNjY15f4J8f4J7f4N6fYOLi4t7f4N6f4R5fYJ5fYJ5fYN6foJ5fYV5fYN8goJ5f4V/f496foJ6fYR6f4R6foJ6fYJ5foN5fYJ5fYN7foN7f4N/f4x5fYJ6foKZmZl5fYJ5hYV5fYN5fYN5fYJ5fYN5fYN5fYN5fYN6foJ5fYV6foJ6f4J7foN6fYN5fYJ5foJ/f4d5foN6fYR5fYJ5fYN5fYJ6foJ5fYJ5foJ6fYR5fYV6foJ5f4J5fYJ5foJ5fYJ5fYKJiYl6f4R5foJ5foJ5foJ6hIR5fYJ5f4V6fYR6foJ6fYJ6fYJ5fYL3B6qLAAAAknRSTlMA8wP4DIoVAQLvCAriJPmyvd62u9X6VeoHO15ggBj+KNFnaWifBFsz506FDp1/Bss+N5WG/ZgSzFTsHHb21m148GQd8o8JXEo6owtENuH1m8Q/0C8qEIFLMneUY9/YWTwU230F5BehiO7a1M61hz17Yl+O5cggZU3gfPyJx41TQb5Syartvw04rJfKG6IsScDTnLdCNQgAAAHsSURBVBgZpcFldxpBAAXQByzs4hKSkABxd3d317q7u7u79/3ispwUZpeZDz29F//ja83v2M6vn99qK5GR/lzl+OL+AIkXbyr417MF4/U7mtbXYLd2j3R8qv6x+327dtlLxp/w7a728T2jK7C6FeLdBwnsmU+uk4+RYWwxBYvr5B0/BPO9N5G1yghEtXTdhtwMAxB0FfMEFFYZQZ4zzl4oGFtMIe8oT5+FnL7J6AryjrEEcvomN5aQd4gBHXJubryE4ACPQOEpn0NUxINQeMhXEMW5Dwr3+QgiL/dDQaMDohATUEjQBVET01BIswmiTt6AQhc7IerhKBRG2QNRCcd1ZDWcQtb5BmTp4yyByDfFRZgO8/hJZCydYwqmRU75YDHHCEyeHfLK8oWr5OUZmCKcg5XHwXKYOs6UMuPSRT9M5XR4YJNkqAxZ9WUL5dsdyCoLMYkCbpYGYRMspRuFjDBnp2ExPcuwAQktTF4bQc5IjAxrkNInx+htxZ5WL8cmdSg4q9iOnHZWOaEywagPOb4oJ6Dg8bIZgmZ6PZBrYwwWMbZBqrvCFYRF0FXRDQljkC2waeGggULVDPhh4w+wGgUGhjmEAkMcHoBdP4sgUcR+2DT2FVdCorK4rxFWdXRDys06WNXXaJDSapz4V38AuCN1L95kvMoAAAAASUVORK5CYII=");
    }
    a.router-link-active i {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABuVBMVEVHcEz/Xxb/qlX/Xxb/air/YBb/YRj/////f3//YBb/Xx//Zhn/Xxb/Yxz/Xxb/Xxb/Xxb/Xxb/Xxb/Xxf/Xxb/Xxb/YBj/Xxb/Xxn/bST/YRj/Xxf/Xxf/Xx//Xxb/Xxn/Xxf/YBb/YRj/Xxb/YBb/fz//Xxb/YBb/Yhb/Xxn/Xxb/bST/fyr/Xxb/Xxf/YBb/Xxb/YRf/Xxb/Yhj/YRj/Xxb/Xxf/Xxb/Xxb/Yxz/Xxf/Xxb/Xxf/Xxb/Xxb/Xxf/ZBv/YBb/YBf/cRz/YRb/YBr/Xxb/YBj/YBr/Xxf/Yxf/YRb/cxf/Xxb/Xxf/Xxb/YBb/YRj/Xxb/YRv/YRj/Xx//Xxf/YBn/YBb/YBf/YBf/Xxf/YBb/YRn/Xxb/ZjP/Xxb/Xxb/Zhn/YRb/Yxb/Xxb/Xxb/Xxb/Xxb/Xxb/Xxb/Xxb/Xxb/YBf/Xxb/YBb/YBn/YBj/Xxf/Xxb/Xxb/Xxf/Xxb/YBf/Xxb/Xxb/YBb/YBb/YBf/Xxf/Yhf/Xxb/Xxj/YBj/YBb/Xxb/Xxb/YBb/Yif/Xxb/YBb/Xxb/YBf/Zxz/YRj/Yhf/YBb/YBb/Xxb/Xxb/XxaQMtuMAAAAknRSTlMA8wP4DIoVAQLvCAriJPmyvd62u9X6Veo7B15ggBj+KNFnaWifBFvnTjPLDgadhX+VN4Y+VMyY7P0SbfZ21vB4HGSPCVwd8ko6ozZEC+Gb9cQ/0C8qEEsylIF3Y9882wXYfRRZF+TuiNTaoc57YrWHPV+OyOUgZU3g/HyJx41BvlNSqu3Jvw04rMqXG0ksopzA02dV85YAAAHsSURBVBgZpcFldxpBAAXQByzs4hKSkABxd3d317q7u7u79/3ispwUZpeZDz29F//ja83P2M7vXz9qK5GR/lLl+Oz+AIlX7yr417M54/VbmtZXYLdyl3R8qv62+327dtlLxh/zza728T2ja7C6HuK9B2XYM5tcJ58gw9hiChY3yTt+CGZ7riFrlRGIaum6Dbl5BiDoLeZZKKwygjxnnD1QMLaYQt5RnjgJOX2D0TXkHWMJ5PQNbi4h7yADOuTc3HwBwWEegsJTPoeoiAeg8JAvIYpzHxTu8xFEXu6HgkYHRCGWQaGMLogamYZCmo0QtfAWFHrZAlEXx6Awxi6ISjiuI6vhDLLONSBLH2cJRL4JLsJ0hKeOI2PpPFMwLXLCB4sZRmDy7JCXlq9cJS/PwxThDKw8DpbD1Ha6lBkXLvphKqfDA5skQwlk1SfmyrfbkJUIMYkCbpYGYRMspRuFjDAXpmExvcCwAQktTN6YQs5UjAxrkNInR+ltxZ5WL0cndSg4q9iJnE5WOaEywqgPOb4oR6Dg8bIJgiZ6PZBrZwwWMbZDqrvCFYRF0FXRDQmjnx2w6WC/gULVDPhh4w+wGgWGB9mHAn0cHIbdAIsgUcQB2DQPFVdCorJ4qBlWdXRDys06WNXXaJDSapz4V38AfAV1LyOOAEwAAAAASUVORK5CYII=");
    }
  }
}
</style>

