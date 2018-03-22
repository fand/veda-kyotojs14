/*{
  soundLength: 3.7,
  IMPORTED: {
    amen: { PATH: './sounds/break.wav' },
    // amen: { PATH: './images/1.jpg' },
    // amen: { PATH: './images/lgtm.gif' },
    // amen: { PATH: './videos/1.mp4' },
  }
}*/
precision mediump float;
uniform sampler2D amen;
uniform sampler2D image1;

vec2 mainSound(float t) {
  vec2 s;
  s = loadSound(amen, mod(t, 1.85));
  // s = loadSound(amen, mod(t, 1.85 / 2.));
  // s = loadSound(amen, mod(t, 1.85 / 16.));

  // s = loadSound(amen, t * 100000.);

  // Bit Crusher
  // float bit = 16.;
  // s = floor(s * bit) / bit;

  return s;
}
