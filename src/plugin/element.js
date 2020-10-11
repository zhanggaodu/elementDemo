import Vue from 'vue'
import {
    Button, Select, Row, Col, Cascader, MenuItem, Menu, MenuItemGroup, Submenu, Table,
    TableColumn, Popover, Tag, MessageBox, Message, Form, FormItem, Input, Switch, Dialog, Option,
    Radio
} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Cascader)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Radio)

Vue.prototype.$message = Message                //vue实例上挂载Message                
Vue.prototype.$messagebox = MessageBox