document.onreadystatechange = function () {
	if (document.readyState == 'complete') {


		var canvas = document.createElement('canvas');
			c = canvas.getContext('2d'),
			particles = {},
			particleId = 0;
			particleCount = 5;

		canvas.width = 800;
		canvas.height = 600;

		document.body.appendChild(canvas);

		c.fillStile = "black";
		c.fillRect(0, 0, canvas.width, canvas.height);

		function Particle() {
			this.x = canvas.width/2;
			this.y = canvas.height/2;

			this.vx = Math.random() * 10 - 5;
			this.vy = Math.random() * 10 - 5;

			this.gravity = 0.2;

			particleId++;
			particles[particleId] = this;
			this.id = particleId;

			this.life = 0;
			this.maxLife = Math.random() * 30 + 10 ;

		}

		Particle.prototype.draw = function(){
			this.x += this.vx;
			this.y += this.vy;

			this.vy += this.gravity;

			this.life++;

			if (this.life >= this.maxLife){
				delete particles[this.id];
			}

			c.fillStyle = "white";
			c.fillRect(this.x, this.y, 5, 5);
		};


		for (var i = 0; i < particleCount; i++){
			new Particle(20);
		}

		setInterval(function(){
			c.fillStyle = "black";
			c.fillRect(0, 0, canvas.width, canvas.height);

			for (var i = 0; i < particleCount; i++){
				new Particle(20);
			}

			for (var i in particles){
				particles[i].draw();
			}

		}, 30);

	}
}