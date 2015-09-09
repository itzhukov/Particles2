document.onreadystatechange = function () {
	if (document.readyState == 'complete') {


		var canvas = document.createElement('canvas');
			c = canvas.getContext('2d'),
			particles = {},
			particleId = 0;
			particleCount = 1,
			emitterSquare = 500;


		canvas.width = 1200;
		canvas.height = 600;

		document.body.appendChild(canvas);

		var img = document.getElementById("particle");

		c.fillStile = "black";
		c.fillRect(0, 0, canvas.width, canvas.height);

		/* Particle */
		function Particle() {
			this.x = (canvas.width/2 - emitterSquare/2) + (Math.random() * emitterSquare);
			this.y = (canvas.height/2 - emitterSquare/2) + (Math.random() * emitterSquare);

			this.vx = Math.random() * 3 - 3;
			this.vy = Math.random() * 3 - 3;

			this.width = 5;
			this.height = 5;

			this.gravity = 0.2;

			particleId++;
			particles[particleId] = this;
			this.id = particleId;

			this.life = 0;
			this.maxLife = Math.random() * 30 + 50;
			/*
			this.color = "rgba("+ parseInt(Math.random()*255, 10) + "," +
				                + parseInt(Math.random()*255, 10) + "," +
				                + parseInt(Math.random()*255, 10) + ", 0.5)";
			*/
			this.color = "rgba("+ parseInt(Math.random()*255, 10) + ", 0, 0, 0.9)";



			// console.log('color:' + this.color);
		}


		/* Draw particle */
		Particle.prototype.draw = function(){
			this.x += this.vx;
			this.y += this.vy;


			if (Math.random() < 0.1){
				this.vx += Math.random() * 10 - 5;
				this.vy += Math.random() * 10 - 5;
			}


			//this.vy += this.gravity;
/*
			if (Math.random() > 0.3){
				this.vx += Math.random() * 0.1;
				this.vy += Math.random() * 0.1;
			}
*/
			this.life++;

			if (this.life >= this.maxLife){
				delete particles[this.id];
			}

			//c.fillStyle = "rgba(255, 0, 0, 0.1)";
			//c.fillStyle = "rgba(255, 255, 255, 0.5)";
			c.fillStyle = this.color;
			c.fillRect(this.x, this.y, this.width, this.height);

			//c.drawImage(img, this.x, this.y, 68, 85);


		};


		// new particles
		for (var i = 0; i < particleCount; i++){
			new Particle();
		}


		setInterval(function(){
			c.fillStyle = "rgba(0, 0, 0, 0.1)";
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