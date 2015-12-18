import postcss from 'postcss';
import test    from 'ava';
import plugin from './';
function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('gets selector in class rule', t => {
    return run(t, 'a{content:"%@"}', 'a{content:"a"}');
});
