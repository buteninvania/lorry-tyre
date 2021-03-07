import React from 'react';

const SvgPlace = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0 0H26V26H0V0Z" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0" transform="scale(0.0384615)"/>
                </pattern>
                <image id="image0" width="26" height="26"
                       href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADSElEQVRIia2UT2hcVRTGf9+b92ba2CRFKqhBVMhCQ/rnJQbUisSVdBp1pWCLiGjtStSVCiIoKOpGFPFvQKrG1hasVZN0IRIQLRYzmdpaXQRKBaW0FTqmM5O8N7nHRTOTaZN5r9qe1X3nfPf7zjn3nCcuwqx7Uy5u13aMLYjec06OII0EM+4DTY/PpXEoDVBZP9Tle24UWN8CUqw5b6jt0Dd//m+hhUp+ShBpiAUzdmtSZV7S7bhd25tEIsmeifG7YvwuoWeBaCG2Ie5gWxKXn5Lp1vpB6IWgMPZ6U+y1ONyMYa8CYNoKvN2KKLEiUE8jI6/28ZIsfdvRhO1NYkoRco2eV1xuyXtWIy+z+GXVSxDicP2QZf6hC4OB5xo+wwpJRMlvJPZhDC4QvRSHm4nIfFIXNuzFBlTeF8lUCVYO7702oHY8NSGoBkHuOh3c+3crQGLrrpj66i+hL1NEwNiVJJIqBIDjnVQM7t00ROovCCDqyx/GaDG+VshOjfencaRXdM7eaxmRWi7pfxYKFH0KVJYEjJlgrrLnsglp8tsSYvfSACP6deLsZRMCkNOHS50avuj7Fzrmwk09MjYiNsp0LCiONZbyvKEQU9nCWF89Fof55w1uAB0w8WOuMPpbM68PYLfdvzKeLW8DHgPW1uWdOAEsbr+znSa9DCDT581EBk8DV4I9KoMozP8CGg5WtA3rwJ6qV113z43xbLkIvAmsBU4CO5E94eYzt59HlvH3LxJrf3PM+RoAngTbBZwC1oG9Fc+WD8323d2tqC//HcZdwO9m9lw2c3JUk5Pxcn02UBzmy4ALpsbaBbYsrr8/iOyaIZl7BbgJbMLHNAAGxoO54nhxuYuN1oFFcBywViIAC4nujTbkjyGmwLtFUZgfAbYAJRlv1DKZj1ZOfv1HkmCaVcP89Z54RMZTQCfwmWxwcEV8pm0H4oF65aCjmPsBeUc83LQzO+3MK+Xm/RJr/ikBcLqjcy5T6/TkOj1pjcPrxlwv0h3AzdQn2tgdrK483BjvOMzfadLjGPeBrbqUikBnEfsE7weF0e9hmT2ywUG/Vlo1YLgBoAfUDVwNdhWQBVYvQM8AEegUcAJsGjiK7GDQUf1ZExO1Zt5/AYzsOAMpN6VRAAAAAElFTkSuQmCC"/>
            </defs>
        </svg>
    )
}

export default SvgPlace;