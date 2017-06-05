<?php

static $rules = [
    '@PSR2'                                       => true,
    'single_import_per_statement'                 => false,
    'array_syntax'                                => ['syntax' => 'short'],
    'class_definition'                            => ['singleLine' => true],
    'concat_space'                                => ['spacing' => 'one'],
    'function_typehint_space'                     => true,
    'hash_to_slash_comment'                       => true,
    'heredoc_to_nowdoc'                           => true,
    'include'                                     => true,
    'lowercase_cast'                              => true,
    'method_separation'                           => true,
    'no_empty_comment'                            => true,
    'no_empty_phpdoc'                             => true,
    'no_empty_statement'                          => true,
    'no_leading_import_slash'                     => true,
    'no_leading_namespace_whitespace'             => true,
    'no_mixed_echo_print'                         => ['use' => 'echo'],
    'no_multiline_whitespace_around_double_arrow' => true,
    'no_short_bool_cast'                          => true,
    'no_singleline_whitespace_before_semicolons'  => true,
    'no_spaces_around_offset'                     => true,
    'ordered_imports'                             => true,
    'trailing_comma_in_multiline_array'           => true,
    'trim_array_spaces'                           => true,
    'pre_increment'                               => true,
    'short_scalar_cast'                           => true,
    'single_quote'                                => true,
    'no_extra_consecutive_blank_lines'            => [
        'tokens' => [
            'curly_brace_block',
            'extra',
            'parenthesis_brace_block',
            'square_brace_block',
            'throw',
            'use',
        ],
    ],
    'ordered_class_elements' => [
        'order' => [
            'use_trait',
            'constant_public',
            'constant_protected',
            'constant_private',
            'property_public',
            'method_public',
            'property_protected',
            'method_protected',
            'property_private',
            'method_private',
        ],
    ],
];

// php-cs-fixer fix --quiet --config=phpcs-fix.php
return \PhpCsFixer\Config::create()
    ->setRules($rules)
    ->setRiskyAllowed(true)
    ->setHideProgress(true)
    ->setPhpExecutable('php')
    ->setUsingCache(true)
    ->setCacheFile(sys_get_temp_dir() . '/.phpcs');
