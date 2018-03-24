precision mediump float;
uniform float time;
uniform vec2 resolution;

vec2 rot(in vec2 uv, in float t) {
    float c = cos(t), s = sin(t);
    return mat2(c, -s, s, c) * uv;
}

void main() {
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);

    p = p * (length(p) + sin(time * 1.4) - .5);
    // p = rot(p + .1, time + sin(time + (length(p) + 3.) * 7.) * .4);
    p = rot(p + .2, time + sin(length(p) * 20.) * .2);

    gl_FragColor = vec4(
        sin(p.x * 20. + sin(p.y * 3. + time + 0.)) + cos(p.y * 30. + sin(p.x * 7. + time)),
        sin(p.x * 20. + sin(p.y * 3. + time + 1.)) + cos(p.y * 30. + sin(p.x * 7. + time)),
        sin(p.x * 20. + sin(p.y * 3. + time + 2.)) + cos(p.y * 30. + sin(p.x * 7. + time)),
        1
    );
}
