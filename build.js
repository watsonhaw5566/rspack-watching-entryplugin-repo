import {EntryPlugin, rspack} from '@rspack/core'


const compiler = rspack({
    entry: './src/index.js',
})

compiler.watch({}, (err, stats) => {
    if (err) {
        console.error(err)
    }
    if (stats.hasErrors()) {
        console.error(stats.hasErrors().toString())
    }
    new EntryPlugin(compiler.context, '/src/new-entry.js', {name: 'new-entry'}).apply(compiler)
})
