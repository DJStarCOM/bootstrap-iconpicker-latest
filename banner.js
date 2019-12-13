module.exports = {

    get: function(filename) {
        return [
            '/*!========================================================================',
            '* File: ' + filename + ' v<%= pkg.version %> by @victor-valencia',
            '* <%= pkg.homepage %>',
            '* ========================================================================',
            '* Copyright 2019-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.',
            '* Licensed under <%= pkg.license %> license.',
            '* https://github.com/DJStarCOM/bootstrap-iconpicker-latest/blob/master/LICENSE',
            '* ========================================================================',
            '*/',
            '',
            ''
        ].join('\n');
    }

};
