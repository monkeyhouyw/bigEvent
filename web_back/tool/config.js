// 存放接口地址
var baseUrl = 'http://localhost:8000';

// 登录
var USER_LOGIN = baseUrl + '/admin/login';
// 退出登录
var USER_LOGOUT = baseUrl + '/admin/logout';
// 获取用户信息
var USER_INFO = baseUrl + '/admin/getuser';


// 文章数量统计
var ART_COUNT = baseUrl + '/admin/article_count';
// 评论数量统计
var COM_COUNT = baseUrl + '/admin/article_count';
// 月新增文件数
var MOUTH_COUNT = baseUrl + '/admin/article_count';
// 各类型文章数量统计
var ART_TYPE_COUNT = baseUrl + '/admin/article_category_count';


// 月文章访问量
var ART_VISIT = baseUrl + '/admin/article_category_visit ';
// 文章搜索
var ART_SEARCH = baseUrl + '/admin/search';
// 发布文章
var ART_PUBLISH = baseUrl + '/admin/article_publish';
// 文章编辑
var ART_EDIT = baseUrl + '/admin/article_edit';
// 删除文章
var ART_DEL = baseUrl + '/admin/article_delete';


// 文章类别搜索
var TYPE_SEARCH = baseUrl + '/admin/category_search';
// 新增文章类别
var ART_TYPE_ADD = baseUrl + '/admin/category_add';
// 编辑文章类别
var ART_TYPE_EDIT = baseUrl + '/admin/category_edit ';
// 删除文章类别
var ART_TYPE_DEL = baseUrl + '/admin/category_delete';
// 文章评论搜索
var ART_COM_SEARCH = baseUrl + '/admin/comment_search';
// 评论审核通过
var ART_COM_PASS = baseUrl + '/admin/comment_pass';
// 评论审核不通过
var ART_COM_REJECT = baseUrl + '/admin/comment_reject';
// 删除评论
var ART_COM_DEL = baseUrl + '/admin/comment_delete';


// 获取用户信息
var USER_INFO_GET = baseUrl + '/admin/userinfo_get ';
// 编辑用户信息
var USER_INFO_EDIT = baseUrl + '/admin/userinfo_edit';