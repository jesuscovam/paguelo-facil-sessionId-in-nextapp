function onSubmitAction() {
  /* initialize api session getter */
  PF.initialize({
    onFinish: function (params) {
      /* capture the { params.sessionId } */
      console.log("onFinish", params);
      document.getElementById("sessionId").value = params.sessionId;
    },
  });
}
