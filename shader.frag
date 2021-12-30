precision mediump float;

// declare a uniform vec2 variable. We use a vec2 because the mouse has both x and y
// p5 will send data to this variable
uniform vec2 mouse;
uniform float min;
uniform float max;

varying vec3 vColor;
varying float altura;


void main() {
  vec3 c;
  if(altura<0.4){
        c = vec3(0,0,altura);
  }
  else if(altura<=0.43){
      c = vec3(0,altura,0);
  }else{
      c = vec3(altura,altura,altura);
  }
  //vec3 c = vec3(altura,0,0);
  gl_FragColor = vec4(c, 1.0 );
}