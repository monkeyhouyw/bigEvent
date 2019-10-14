// user.js是用来管理用户所有请求接口的操作
// 与接口有关的部分留下
// 与页面有关的部分放回到页面中，通过传参传入
var user = ({

    login: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.callback
                // 另一简便算法
                // success:function(res) {
                //   options.callback(res);
                // }
        })
    },
    logout: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success: options.callback
        })

    },
    userinfo: function(options) {
        $.ajax({
            url: USER_INFO,
            success: function(res) {
                console.log(res);
                // console.log(res.data);
            }
        })
    }
})