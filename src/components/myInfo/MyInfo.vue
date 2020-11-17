<template>
  <div>
    <!-- 头部导航栏 -->
    <div class="header">
      <!-- 左侧四个链接 -->
      <div class="head_nav">
        <a href="">园子</a>
        <a href="">关注</a>
        <a href="">粉丝</a>
        <a href="">消息</a>
      </div>
      <!-- 右侧博客logo -->
      <div class="logo">
        <a href="">
          <img src="../../../static/bogLogo.png">
        </a>
      </div>
      <!-- 左下方欢迎使用者 -->
      <div class="head_user">
        <h3 id="head_user_left">欢迎你</h3>
      </div>
      <!-- 右下方链接 -->
      <div class="head_user_right">
        <a href="">博客广场</a>
        <a href="http://localhost:8080/#/index/blogManage">我的博客</a>
        <a href="">设置</a>
        <a href="">退出</a>
      </div>
    </div>
    <!-- 中间的填写信息框 -->
    <div class="container">
      <div class="top_nav">
        <a href="">上传头像</a>
        <a href="">账户设置</a>
        <a href="" id="mydata">我的资料</a>
        <a href="">个人信息</a>
        <a href="">联系方式</a>
      </div>
      <!-- table填写框 -->
      <div class="from">
        <table id="myfrom">
          <tbody>
            <tr>
              <td class="tr_title"></td>
              <td class="tr_content"></td>
              <td class="tr_see">谁可看见</td>
            </tr>
            <tr>
              <td class="tr_title">用户名：</td>
              <td class="tr_content"><input class="td_inM"></td>
              <td class="tr_see">
                <select id="see_name">
                  <option value="1">任何人</option>
                  <option value="2">仅好友</option>
                  <option value="3">私密</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="tr_title">昵称：</td>
              <td class="tr_content"><input class="td_inM"></td>
              <td class="tr_see">
                <select id="see_name">
                  <option value="1">任何人</option>
                  <option value="2">仅好友</option>
                  <option value="3">私密</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="tr_title">性别：</td>
              <td class="tr_content">
                <input class="radio_block" id="Gender" name="Gender" type="radio" value="1" />
                <label for="ctl00_cphMain_radio_gender_0">男</label>
                <input class="radio_block" id="Gender" name="Gender" type="radio" value="2" />
                <label for="ctl00_cphMain_radio_gender_1">女</label>
              </td>
              <td class="tr_see">
                <select id="see_name">
                  <option value="1">任何人</option>
                  <option value="2">仅好友</option>
                  <option value="3">私密</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="tr_title">邮箱：</td>
              <td class="tr_content"><input class="td_inM"></td>
              <td class="tr_see">
                <select id="see_name">
                  <option value="1">任何人</option>
                  <option value="2">仅好友</option>
                  <option value="3">私密</option>
                </select>
              </td>
            </tr>
           <tr>
              <td class="tr_title">电话号：</td>
              <td class="tr_content"><input class="td_inM"></td>
              <td class="tr_see">
                <select id="see_name">
                  <option value="1">任何人</option>
                  <option value="2">仅好友</option>
                  <option value="3">私密</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="tr_title">生日：</td>
              <td class="tr_content">
                <!-- 选择年月日 -->
                <select data-val="true" data-val-required="The BirthdayYear field is required." id="year" name="BirthdayYear" onchange="show()"><option value="">请选择</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                </select> 年
                    <select data-val="true" data-val-required="The BirthdayMonth field is required." id="month" name="BirthdayMonth" onchange="show()"><option value="">请选择</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select> 月
                    <select data-val="true" data-val-required="The BirthdayDay field is required." id="day" name="BirthdayDay"><option value="">请选择</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select> 日
              </td>
              <td class="tr_see">
                <select id="see_name">
                  <option value="1">任何人</option>
                  <option value="2">仅好友</option>
                  <option value="3">私密</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="tr_title">个人简介：</td>
              <td class="tr_content">
                <textarea name="person" id="textarea" cols="33" rows="5"></textarea>
              </td>
              <td class="tr_see">
                <select id="see_name">
                  <option value="1">任何人</option>
                  <option value="2">仅好友</option>
                  <option value="3">私密</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="save_btn">
          <button class="save"><a href="">保存</a></button>
        </div>
      </div>
    </div>
    <!-- 底部友情链接 -->
    <div class="footer">
      <a href="">关于</a>
      <a href="">联系</a>
      <a href="">广告</a>
      @2020-2020
      <a href="">博客园</a>
    </div>

  </div>
</template>

<script>
export default {
 
}

   
 
</script>

<style scoped>
.header{
  height: 130px;
  width: 60%;
  margin: auto;
  border: 1px solid white;
}
.header a{
  text-decoration: none;
  margin: 0 0 0 10px;
}
.head_nav{
  margin-top: 10px;
  width: 200px;
  float: left;
}
.head_nav a{
  color: #075db3;
}
.logo{
  float: right;
}
.logo img{
  height: 90px;
}
.head_user{
  margin-left: 10px;
  margin-top: 90px;
  width: 200px;
}
.head_user_right{
  float: right;
  margin-top: -15px;
  margin-right: 10px;
}
.head_user_right a{
  color: #666666;
}
.container{
  height: 500px;
  width: 60%;
  margin: auto;
  border-top: 1px solid #e5e8ec;
  border-bottom:  1px solid #e5e8ec;
}
.top_nav{
  /* text-align: center; */
  width: 60%;
  margin: auto;
  margin-top: 20px;
  padding: 3px;
  border-bottom: 1px solid #c8d3de;
}
.top_nav a{
  text-decoration: none;
  margin-right: 5px;
  padding: 5px 10px 3px;
  font-size: 16px;
  border: 1px solid #c8d3de;
  border-bottom: none;
  color: #333333;
  background-color: #e8edf0;
}
#mydata{
  background-color: #ffffff;
}
.from{
  width: 60%;
  margin: auto;
  color: #454545;
  font-size: 15px;
}
.from td{
  border-bottom: 1px dashed #c8d3de;
}

.tr_title{
  height: 40px;
  width: 90px;
  text-align: right;
}
.tr_content{
  width: 300px;
}
.td_inM{
  padding: 2px;
  border: 1px solid #cccccc;
  color: black;
}
#textarea{
  border: 1px solid #cccccc;
  padding: 2px;
}
.save_btn{
  margin-left: 93px;
  margin-top: 5px;
}
.save{
  width: 55px;
  height: 24px;
  font-size: 15px;
  border: 1px solid;
  background-color: #0099FF;
}
.save a{
  text-decoration: none;
  color: white;
  font-weight: 600;
}
.tr_see{
  width: 100px;
  color:#454545;
}
.footer{
  height: 20px;
  width: 60%;
  margin-left: 250px;
  text-align: center;
}
</style>