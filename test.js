import postcss from 'postcss';
import test    from 'ava';
import plugin from './';
function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('gets selector in class rule', t => {
    return run(t, '.class{content:"%@"}', '.class{content:".class"}');
});

test('set symbol through options', t => {
    return run(t, 'a{content:"*@"}', 'a{content:"a"}', { symbol: '*@' });
});

