import Vue from 'vue'
import {RadioGroup,RadioButton,Menu,Submenu,MenuItemGroup,MenuItem,Container,Header,Aside,Footer,Main,Breadcrumb,BreadcrumbItem,Card,Button,Form,Input, Col, Row,FormItem, Tabs, TabPane, Pagination, Table, TableColumn, Avatar,Upload} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; //还需要引入样式表才能使用

Vue.use(Container)//使用Vue.use是用来全局注册插件,Vue.component()是用来注册全局组件的
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Avatar)
Vue.use(Upload)


