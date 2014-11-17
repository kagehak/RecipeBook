Polymer({

  booktitle: "",
  bookdesc: "",

  createbook: function(){

    chrome.syncFileSystem.requestFileSystem(function(fs){
      fs.root.getFile("boooklist.txt", {create: true}, function(fileEntry){

        var data = "" + this.booktitle + "," + this.bookdesc + ";";

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