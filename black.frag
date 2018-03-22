precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float tb = mod((time + gl_FragCoord.x * .01 + 3.7) * 12., 16.) / 16.;
  float amp = (1. - fract(tb * 4.));
  amp*=amp;

  gl_FragColor = vec4(0,0,0,1);
  // if (uv.y < 0.5) {
  //   gl_FragColor.b = tb;
  // } else {
  //   gl_FragColor.g = amp;
  // }
  // gl_FragColor.r = fract(time / 10.66666667);
}
