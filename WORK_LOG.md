# SCULP Studio · 工作日志

按多伦多时间记录网站修改。每次改动后，在这里追加日期、改动内容和对应提交，方便回看。

## 2026-10-01

- 在 Artist Portfolios 页面加入常驻右下角悬浮导航：Top 按钮可平滑回到页面顶部，Artists 菜单可从任意滚动位置直接切换七位化妆师，并标记当前人物；手机端缩小控件并适配安全区。

- 主 Portfolio 同步改为无小字的紧凑自然比例瀑布流，桌面3列、平板2列、手机1列；Artist Portfolios 的入口卡片与顶部切换按钮改为 Miranda 优先，其余成员仍保持相同尺寸和视觉权重。

- 收紧个人作品页视觉：Angelina 作品改为无文字、无编号的自然高度瀑布流，桌面3列、平板2列、手机1列，图片间距缩至 14px；保留完整原始比例，不影响主 Portfolio 的常规图片墙。

- 导入 Angelina 提供的 26 张作品图，自动旋转、压缩为 WebP 并按妆容特写、完整造型、婚礼现场与创意妆交替排序；个人作品区采用不限数量的原比例三列图片墙（平板2列、手机1列），加入轻编号、细分隔线与桌面端错落留白，未启用裁剪或点击放大。两版素材各约 2.3 MB。

- 将 Portfolio 从“3张主图＋横向小图”改为直接展示的原比例作品墙：桌面3列、平板2列、手机1列，共保留20张现有作品且不再强制裁剪；移除点击放大与放大光标。Artist Portfolios 同步使用相同自适应图片墙，并在选择化妆师后只展示该人的作品区，避免未来每人约20张时形成超长页面。

- 新增独立 Artist Portfolios 页面：为七位化妆师按字母顺序设置等尺寸入口与各三个作品预留位；Portfolio 底部加入统一入口，Team 每位成员加入对应作品按钮，页面补充咨询 CTA 与返回 Portfolio 按钮。检查两版均为 7 个入口、7 个作品区、21 个预留位，无 HTML 解析或差异格式错误；当前环境缺少浏览器执行文件，未完成自动截图检查。

- 调整 Bridal Trial 的 Senior Styling Artist 中间档价格：One-Look $350、Two-Look $450、Three-Look $550；其他档位与 Wedding-Day Services 保持不变。

- 重构 Bridal Pricing：先展示 Bridal Trial，再展示 Wedding-Day Services；两组各三档服务，采用新价格表数字并补入中间价。化妆师职务统一为 Team 页的 Founder / Creative Styling Director、Senior Styling Artist 与 Styling Artist；移除 Additional Services 中重复的 Trial Session。

- 更新 Occasions 首屏右上图片为红色重影妆容肖像；保留左侧白裙图与右下黑白双人照，形成氛围、妆容创意与场合叙事的组合，并校准横向裁剪焦点。

- 调整 Occasions 首屏三图：保留左侧原图并上移焦点避免裁头；右上替换为红花妆容特写，右下替换为黑白双人照，并分别校准人物裁剪。

- 将用户提供的横向新娘艺术照放入首页 Selected Work 三图的右下位置；保留 706 左侧大图和 717 右上图，并同步主站与 After Dark。

## 2026-09-30

- 去除 After Dark Hero 图片源文件左侧残留的白色像素线，同时清理其余边缘并为图片地址增加版本参数；保持人物构图和颜色不变。

- 复查 After Dark Hero 线上效果后，进一步移除压暗图片的渐变遮罩及悬停缩放，并为样式表增加版本参数强制浏览器更新；Hero 现在始终直接显示原图。

- 关闭 After Dark 首页 Hero 的灰度、复古色调及悬停暖色滤镜，所有状态均显示原图颜色；检查鼠标移入前后滤镜一致。

- 在首页 “The artists” 团队预览区加入 Miranda 肖像，替换空白图片框；同步主站与 After Dark，并检查桌面、手机裁切。

- 将用户提供的户外新娘肖像设为首页 Hero，裁除原图白边并转为 WebP；分别为主站和 After Dark 调整焦点位置，检查桌面与手机裁切。

- 为 After Dark 增加基础统计层：支持 GA4 与 Microsoft Clarity，并记录虚拟页面访问、来源、分区浏览、滚动深度、CTA/作品点击、服务兴趣、表单开始与有效提交、各页面有效停留。统计脚本不读取或发送表单内容；待填入两个平台生成的项目编号后开始收数。

- 调整 Yuki / Mira 照片尺寸层级：桌面肖像宽度上限 400px，图片在上、介绍在下；平板与下方成员等宽，手机使用单列。检查照片不大于 Miranda、不小于下方成员，以及页面溢出。

- 重新排版 Yuki / Mira：桌面使用紧凑肖像与介绍并排布局，照片上限 240px；平板单列并排，手机使用 220px 小幅肖像及下方介绍。保留 4:5 比例，检查多尺寸排版与裁切。

- 将 Yuki、Mira 与其他团队成员卡片照片统一为 4:5 竖版比例，取消不同固定最小高度；检查桌面与手机六张卡片比例一致、人物裁切正常。

- 同步主站七位团队成员的黑白肖像到 After Dark Team 页：Miranda、Yuki、Mira、Angelina、Elaine、Emily、Giselle。保留深色视觉和动画；检查桌面及手机加载与裁切。

- 将主站选好的 13 张用户婚礼照片复用到 After Dark 的 22 个图片展示位：首页 Hero / Selected Work、Bridal 及 Portfolio。保留深色视觉、图片处理与动画，便于对比两版效果。
- 替换所有概念网图展示位，撤掉 CONCEPT IMAGE 及内部待补标注；Portfolio 本轮统一为 Bridal 分类。新增 WebP 素材和来源映射清单。
- 验证：桌面及手机图片加载、横向溢出、Portfolio 灯箱与键盘切换；无 JavaScript 错误。

## 2026-09-24

- 将实验版所有标题、Logo、价格和 FAQ 标题字体从 Italiana 恢复为网站原先使用的 Playfair Display；保留深色 editorial 视觉、字号层级、图片与动画交互。

- 在 `sculp-test` 制作独立的深色 editorial 视觉概念：时装感大字、暖灰与酒红配色、全幅影像、服务与作品页的新节奏；原有七个页面、文案、链接及咨询表单内容保持一致。
- 加入滚动揭示、阅读进度线、作品灯箱与键盘导航，并提供减少动态效果的系统偏好支持。内部待确认提示在这个展示版本中仅做视觉隐藏，原文仍在源码内。
- 使用 22 处 Unsplash 概念图，素材来源列在 `assets/IMAGE_SOURCES.md`。作品图明确标注 CONCEPT IMAGE；团队成员及 Studio 实景仍保留占位，正式使用前需替换为获批的真实照片。
- 本次提交（`sculp-test`）：已静态核对全部 7 个页面、44 个链接、11 个表单字段和原有文案，图片文件均存在，JavaScript 通过语法检查。浏览器视觉检查受当前环境限制，尚待线上预览复核。

## 2026-09-23

- 完成全站术语审查：将 42 处 **Makeup / makeup** 全部统一为 **Styling / styling**，覆盖首页、Bridal、Occasions、Education、Team、About、SEO 标题与描述、咨询表单及交互跳转参数。
- 将 6 处与试妆服务有关的 **Preview / preview** 统一为 **Trial / trial**，包括套餐说明、附加服务、价格说明、What's Included 与 Studio 说明；保留无障碍标签中的 “Selected work preview”，因为它指作品预览而非试妆。
- 同步将内部区块锚点 `occasion-makeup` 更新为 `occasion-styling`，确保页面链接继续正确跳转。
- 网站修改提交：[`541aa93`](https://github.com/2ez4jz/sculpstudio/commit/541aa935d7f310c298064d0b570f1d4c2a7fccd1)。

- SCULP Concierge 的 Bridal 说明更新为 **“Wedding-day styling, wedding trial, bridal-party services, and follow-up services…”**。
- 同步更新页面默认文案与交互数据，确保切换选项后返回 Bridal 仍显示新版内容；标题 **“Start with SCULP Bridal.”** 保持不变。
- 网站修改提交：[`50cf504`](https://github.com/2ez4jz/sculpstudio/commit/50cf5048edf45403d49a1cf5766571d87c23100e)。

- 首页 Services 左侧 Bridal 正文更新为 **“A look that feels like you…”**，并移除首页显示的 $290 起价。
- 右侧 Occasions 正文将 “Makeup” 改为 **“Styling”**，覆盖 events、personal appointments、commercial projects、photoshoots 和 education。
- 保留原有标题、链接与双栏布局。
- 网站修改提交：[`2fd5b96`](https://github.com/2ez4jz/sculpstudio/commit/2fd5b96581bf4b41d913b563ce33c2d1cc5c7981)。

- 首页首屏位置文案由 **“Toronto · Available for travel”** 更新为 **“Toronto + Available Worldwide”**。
- 将 “+” 设计为独立的衬线分隔符，并保留原有小标题的大小写、字距和整体位置。
- 网站修改提交：[`86e6d28`](https://github.com/2ez4jz/sculpstudio/commit/86e6d28099a2c4edb2b51b963235c73b8beb6158)。

- 保留首页第二段标题 **“Beauty that still feels like you.”**，正文更新为 “Beauty should feel familiar — only more considered.” 开头的新版品牌文案。
- 保留原有段落结构和样式，仅替换正文内容。
- 网站修改提交：[`ad70745`](https://github.com/2ez4jz/sculpstudio/commit/ad7074535b85ed5551f2433be272b9b674883177)。

- 首页首屏标题更新为 **“Make moments that matter.”**，正文改为以人物、个人风格和场合为核心的品牌介绍。
- 保留原有 Hero 的 HTML 结构、按钮和样式，只替换标题与正文，避免影响现有排版系统。
- 网站修改提交：[`62c0b2b`](https://github.com/2ez4jz/sculpstudio/commit/62c0b2bd8060c7c2b84aa3ca11bfd83c7e7dba23)。

- 将全站服务名称 **Event Makeup** 改为 **Event Styling**，**Personal Makeup** 改为 **Personal Styling**。
- 同步更新 Occasions 页面、咨询表单、推荐模块及预选服务链接，确保名称一致。
- 网站修改提交：[`43a1a6a`](https://github.com/2ez4jz/sculpstudio/commit/43a1a6adc2b34b026677998846362bcb93a31350)。

- 将左侧套餐的 **Preview** 改为 **Trial**，套餐标题更新为 **Wedding Day + Trial**。
- 新增 **The Full-Day Experience**：包含最长 10 小时现场服务，起价 $1,490；SCULP Artist / Senior Artist / Founder 价格分别为 $1,490 / $1,690 / $1,990。
- Bridal 价格区恢复为桌面端三列布局，Half-Day 继续标记为 “Most Chosen”。
- 网站修改提交：[`4ae1bc5`](https://github.com/2ez4jz/sculpstudio/commit/4ae1bc565a92da01276494a1de776617792954e0)。

- 删除 Bridal 价格区最左侧的 **Wedding Day Makeup** 单独套餐，只保留 **Wedding Day + Preview** 和 **The Half-Day Experience**。
- 桌面端价格区改为两列等宽布局；移动端继续采用单列显示。
- 网站修改提交：[`bc7e3e9`](https://github.com/2ez4jz/sculpstudio/commit/bc7e3e93942b5f8c388be550e2e18f17aa477f8e)。

- 将 Bridal 价格卡片中的 “Most Chosen” 从 **Wedding Day + Preview** 移至 **The Half-Day Experience**，并同步移动卡片强调样式。
- Wedding Day + Preview 的小标签改为 “With Preview”；价格和套餐内容未改。
- 网站修改提交：[`b0fb6ea`](https://github.com/2ez4jz/sculpstudio/commit/b0fb6ea45f076dba3736abc2526607093550a19c)。

- 2026-09-30: Updated the homepage Selected Work trio with the three supplied images, placing the second film portrait in the largest position and optimizing all three as WebP.

- 2026-09-30: Swapped the left feature and lower-right Selected Work images, moving the sepia portrait into the largest position.

- 2026-09-30: Re-curated the homepage Selected Work trio with images 708, 707, and 714 for a cohesive bridal story across scene, detail, and emotion.

- 2026-09-30: Rebuilt the non-hero image system across Home, Bridal, Occasions, Portfolio, and About using the 20 supplied photographs; added page-specific visual narratives and optimized WebP assets.

- 2026-09-30: Updated the homepage Selected Work trio to images 717, 666, and 598, and corrected the Occasions feature crop focal points.

- 2026-09-30: Swapped homepage Selected Work images 598 and 717, placing 598 in the large left position and 717 at lower right.

- 2026-09-30: Updated the homepage Selected Work trio to 706 at left, 717 at upper right, and the 694 couple portrait at lower right.
- 2026-09-30: Replaced the left homepage Selected Work image with 598, keeping 717 at upper right and the 694 couple portrait at lower right.
- 2026-09-30: Restored image 706 to the largest left homepage position, with 717 at upper right and the 694 couple portrait at lower right.
- 2026-09-30: Replaced the Bridal approach feature image with the supplied orchid-bouquet bridal portrait and tuned its focal crop.
- 2026-09-30: Moved the Bridal approach portrait crop to the top edge so the bride’s full head remains visible.
- 2026-09-30: Replaced the homepage Craft feature image with the supplied auburn editorial makeup close-up and tuned its crop.
