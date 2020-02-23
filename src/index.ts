/** 收集 -> 保存 */

import { collect } from "./collet";
import { forEach } from "./store";
import { search } from "./search";

// collect({
//   snapshot: `正则 RegExp

//     pubdate: 2019-04-10 14:38:20
//     tags : 正则

//     正则处理字符串的功能十分强大，是每个开发者都应该掌握的技能

// 工具

//     公欲善其事 ，必先利其器

//     正则可视化 神器！

//     正则在线测试
// `,
//   source: "https://shenzilong.cn/%E6%AD%A3%E5%88%99.html",
//   type: "html",
// });

search("tags");
setTimeout(() => {
  search("tags");
}, 8000);
