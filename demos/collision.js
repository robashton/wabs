(function(exports) {

    var Entity = function(x, y) {
      this.position = [x,y]
      this.width = 10;
      this.height = 5;
    }
    Entity.prototype = {
      kill: function() {
        // I do nothing
      },
      update: function() {
        this.position[0] = Math.random() * 100;
      }
    }

    var Ground = function() {
      this.heights = [];
      for(var x = 0 ; x < 200; x++)
        this.heights[x] = Math.random() * 30;
    }

    Ground.prototype = {
      overlapsAt: function(position) {
        var leftx = parseInt(position[0], 10)
        var lefty = this.heights[leftx]
        var righty = this.heights[leftx + 1]
        var lerp = position[0] - leftx
        var value = (lefty * (1.0-lerp)) + (righty * lerp)
        return value <  position[1]
      }
    }

    function calculateCollision(ground, entity) {
      return {
        left: ground.overlapsAt(entity.position),
        right: ground.overlapsAt([
          entity.position[0] + entity.width, entity.position[1]])
      }
    }

    var scene = [];
    var ground = new Ground();
    for(var i =0 ; i < 100 ; i++)
      scene.push(new Entity(Math.random() * 100, Math.random() * 100));

    function update() {
      for(var i = 0 ; i < scene.length; i++) {
        var entity = scene[i];
        entity.update();

        var collision = calculateCollision(ground, entity);
        if(collision.left || collision.right)
          entity.kill();
      }
    }
    setInterval(update, 1000/30);

}.call(this));
