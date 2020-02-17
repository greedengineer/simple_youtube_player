import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    'reload_button': {
        'display':'block',
        'margin':'0 0 0 auto',
        '-webkit-app-region': 'no-drag'
    },
    'input_area': {
        '-webkit-app-region': 'no-drag'
    },
    'drag': {
        '-webkit-app-region': 'drag'
    },
    'youtube_player': {
        'width': '640',
        'height': '360',
        'min-width': '480',
        'min-height': '270'
    },
    'youtube_iframe': {
        'border': '0'
    }
}
);

export default styles