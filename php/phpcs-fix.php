<?php

static $rules = [
    '@PSR2'                                       => true,
    'array_syntax'                                => ['syntax' => 'short'],
    'class_definition'                            => ['singleLine' => true],
    'concat_space'                                => ['spacing' => 'one'],
    'trailing_comma_in_multiline_array'           => true,
    'trim_array_spaces'                           => true,
    'function_typehint_space'                     => true,
    'hash_to_slash_comment'                       => true,
    'heredoc_to_nowdoc'                           => true,
    'include'                                     => true,
    'lowercase_cast'                              => true,
    'short_scalar_cast'                           => true,
    'no_multiline_whitespace_around_double_arrow' => true,
    'single_quote'                                => true,
    'no_short_bool_cast'                          => true,
    'no_singleline_whitespace_before_semicolons'  => true,
    'ordered_imports'                             => true,
    'no_empty_comment'                            => true,
    'no_spaces_around_offset'                     => true,
    'no_empty_phpdoc'                             => true,
    'no_empty_statement'                          => true,
    'pre_increment'                               => true,
    'no_leading_import_slash'                     => true,
    'no_leading_namespace_whitespace'             => true,
    'no_mixed_echo_print'                         => ['use' => 'echo'],
    'no_extra_consecutive_blank_lines'            => [
        'curly_brace_block',
        'extra',
        'parenthesis_brace_block',
        'square_brace_block',
        'throw',
        'use',
    ],
];

// php-cs-fixer fix --quiet --config=phpcs-fix.php
return \PhpCsFixer\Config::create()
    ->setRules($rules)
    ->setRiskyAllowed(true)
    ->setHideProgress(true)
    ->setPhpExecutable('php')
    ->setUsingCache(true)
    ->setCacheFile(sys_get_temp_dir().'/.phpcs')
    ;
