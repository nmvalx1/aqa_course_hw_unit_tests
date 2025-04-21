// Task 2.
//   Xpath/CSS: элемент с id - ‘submit’
//   Xpath/CSS: все элементы с классом ‘txt’ 
//   Xpath: первый элемент с классом ‘txt’
//   Xpath: кнопку которая содержит текст: ‘Remove comment’
//   Xpath: первый элемент с классом ‘one’ 
//   Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением  ‘on’ 
//   Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’ 
//   CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’ 
//   Xpath: используя за основу селектор //*[@id="submit"] найти элемент body 

// ‘submit’ :
const CSSidSubmit = "#submit";
const XpathidSubmit = "//*[@id=\"submit\"]";

//txt : 
const CSSAllElementClassTxt = ".txt";

//   Xpath: первый элемент с классом ‘txt’:
const firtsTxtXpath = "//*[@class=\"txt\"][1]";

//   Xpath: кнопку которая содержит текст: ‘Remove comment’:
const removeComment = "//button[.=\"Remove comment\"]";

// Xpath: первый элемент с классом ‘one’ :
const firstWithClassOne = "//*[contains(@class, 'one')][1]";

// Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением ‘on’ :
const cssMultitag2 = "[multitag2=on]";
const XpathMultitag2 = "//*[@multitag2=\"on\" and @class=\"txt\"]";

// Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’ :
const divContetnCSS = "div > .content";
const divContetnXpath = "//div[@class='content']/*";

//CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’:
const spanButtonWithContent = "span.content,button.content";

//Xpath: используя за основу селектор //*[@id="submit"] найти элемент body :
const a = "//*[@id=\"submit\"]//..//..//..";
