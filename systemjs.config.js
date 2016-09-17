(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        paths: {
            // paths serve as alias
            'npm:': 'https://unpkg.com/'
        },
        map: {
            app: 'app',

            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

            'rxjs':                       'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ts':                         'npm:plugin-typescript@4.0.10/lib/plugin.js',
            'typescript':                 'npm:typescript@2.0.2/lib/typescript.js',

        },
        packages: {
            app: {
                main: './main.ts',
                defaultExtension: 'ts'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);