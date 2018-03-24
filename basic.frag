/*{
    soundLength: 3.2,
}*/
precision mediump float;
#define pi2 6.283185307179586476925286766559

vec2 mainSound(float time) {
    vec2 s = vec2(0);

    // 440Hzのサイン波
    s.x += sin(440. * time * pi2) * .4;

    // 660Hzの矩形波
    s.y += sign(sin(660. * time * pi2)) * .2;

    // 4つ打ちを作る
    float BPM = 150.;
    float secPerBeat = 60. / BPM;
    time = mod(time, secPerBeat);

    // キック
    s += vec2(sin(130. * exp(time * -10.))) * .5;

    return vec2(s);
}
