<template>
  <div class="register">
    <div class="box">
      <h1 id="header">纯享博客注册页面</h1>
      <div class="user_name">
        <input type="text" required />
        <label>
          <span>Username</span>
        </label>
      </div>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
.register{
       height:100%;
       width: 100%;
       background-color: #9966FF;
       float:left;
}
.box{
   background-color: azure;
   width: 30%;
   height: 40%;
   top: 25%;
   margin: auto;
   position: relative;
   border: 1px solid;
   border-radius: 10px;
}
#header{
  text-align: center;
  margin-top: 10px ;
}
.user_name{
    width: 50%;
    height: 50vh;
    margin: auto;
    position: relative;
    font-family: Sans-serif;
}
.user_name input{
  height: 2rem;
  width: 10rem;
  border: none;
  border-bottom: 0.1rem solid black;
  padding-top:1rem ;
  outline: none;

}
.user_name label{
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
.user_name label span{
   position: absolute;
  bottom: -3rem;
  left: 0;
  transition: all 0.3s ease; 
}
.user_name ::after{
  content:"";
  height: 3rem;
  width: 10rem;
  top: 0;
  left: 0;
  border-bottom: 0.2rem solid #1cb9b6;
  transform: translateX(-100%);
  transition:all 0.3s ease;
}

    
</style>