var filer;
Polymer({

  ready: function(){
    var item = new ParagraphElement ();
    item.text="new p element";
    var d = this.shadowRoot.query("#bookcontainer");
    d.children.add(item);

    chrome.syncFileSystem.requestFileSystem(function(fs){
      fs.root.getFile("boooklist.txt", {create: true}, function(fileEntry){

        var data = "testBook";

        fileEntry.createWriter(function(writer){
          writer.onwriteend = function(e){
            console.log("write completed");
          }
          write.onerror = function(e){
            console.log("write");
          }
          var blob = new Blob([data]);
          writer.write(blob);
        });

      });

    })

  }

});