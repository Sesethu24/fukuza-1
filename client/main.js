import Alpine from 'alpinejs';
import './style.css'
import QuickHelp from './quickHelp';

window.Alpine = Alpine

Alpine.data('isOpen', QuickHelp);

Alpine.start()
