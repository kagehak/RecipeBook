var filer;
Polymer({

  bookcreateviewer: "hidden",
  createbookview: 0,
  opencreatebookicon: "add",

  opencreatebook: function(){
    if(this.bookcreateviewer == "hidden")
    {
      this.bookcreateviewer = "shown";
      this.opencreatebookicon = "close"
    }
    else
    {
      this.bookcreateviewer = "hidden";
      this.opencreatebookicon = "add"
    }
  },


  ready: function(){

    this.bookcreateviewer = "hidden";

    /*
    var item = new ParagraphElement ();
    item.text="new p element";
    var d = this.shadowRoot.query("#bookcontainer");
    d.children.add(item);*/

    chrome.syncFileSystem.requestFileSystem(function(fs){
      fs.root.getFile("boooklist.txt", {create: true}, function(fileEntry){

        var data = "testBook";

        fileEntry.createWriter(function(writer){
          writer.onwriteend = function(e){
            console.log("write completed");
          }
          writer.onerror = function(e){
            console.log("write");
          }
          var blob = new Blob([data]);
          writer.write(blob);
        });

      });

    })

  }





});
