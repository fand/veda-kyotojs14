/*{
    soundLength: 25.6,
    soundLength: 12.8,
    soundLength: 6.4,
    IMPORTED:{
        s_kick: { PATH: './sounds/kick.wav' },
        s_snare: { PATH: './sounds/snare.wav' },
        s_gabba: { PATH: './sounds/gabba.wav' },
        s_hat: { PATH: './sounds/hat.wav' },
        s_crash: { PATH: './sounds/crash.wav' },
        s_break: { PATH: './sounds/break.wav' },
        s_up: { PATH: './sounds/up.wav' },
    }
}*/
#define pi2 6.2831
#define BPM 150.
#define beat (60. / BPM)

uniform sampler2D s_kick;
uniform sampler2D s_snare;
uniform sampler2D s_gabba;
uniform sampler2D s_hat;
uniform sampler2D s_crash;
uniform sampler2D s_break;
uniform sampler2D s_up;

bool fill(in float time, in float n, in float m) {
    return mod(mod(time, beat * n) / beat, n) > m;
}

vec2 crash(float time) {
    float tb = mod(time, beat * 8.);
    return loadSound(s_crash, tb);
}

vec2 kick(float time) {
    float tb = mod(time, beat);
    float amp = exp(tb * -3.);
    return loadSound(s_gabba, tb) * amp;
}

vec2 snare(float time) {
    float tb = mod(time, beat);
    if (fill(time, 4., 3.)) {
        tb = mod(time , beat / 2.);
    }
    if (fill(time, 8., 6.)) {
        tb = mod(time, beat / 4.) * 0.8;
    }
    if (fill(time, 16., 14.)) {
        tb = mod(time, beat / 8.) * 0.9;
    }
    return loadSound(s_snare, tb);
}

vec2 up(float time) {
    float tb = mod(time, beat * 4.);
    return loadSound(s_up, tb);
}

vec2 amen(float time) {
    float tb = mod(time, beat * 4.) / (beat * 4.) * 1.86;
    return loadSound(s_break, tb);
}

vec2 hat(float time) {
    float tb = mod(time, beat);
    if (fill(time * 4., 11., 7.)) {
        tb = mod(time, beat / 4.) * 1.03;
    }
    return loadSound(s_hat, tb * 1.2);
}

float drill(in float time, in float n) {
    return mod(time * n, beat) / n;
}

vec2 mainSound(float time) {
    vec2 s = vec2(0);

    // if (fill(mod(time, beat * 16.), 16., 14.)) {
    //     time = drill(time, 4.) + beat * 4.;
    // }
    // if (fill(mod(time, beat * 16.), 16., 12.)) {
    //     time = drill(time, 2.) + beat * 4.;
    // }

    s += crash(time) * .35;
    s += kick(time) * .33;
    s += snare(time) * .3;
    // s += up(time) * .25;
    // s.x += amen(time).x * .3;
    // s.y += hat(time).x * .15;

    return s;
}
