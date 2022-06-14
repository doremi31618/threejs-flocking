import {Clock} from 'https://cdn.skypack.dev/three@0.141.0';

class Loop{
	constructor(camera, scene, renderer){
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.updatables = []
	}
	start(){
		this.renderer.setAnimationLoop(()=>{
			this.animate();
		});
	}
    animate(){
        // handle render frame
        this.renderer.render(this.scene, this.camera);
		this.updatables.forEach((object)=>{
			object.update();
		})
    }
	stop(){
		this.renderer.setAnimationLoop(null);
	}
}

export {Loop}