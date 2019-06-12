// COLORS
export const COLOR_BACKGROUND_BODY = props => props.theme.colors.bodyBackground;
export const COLOR_BACKGROUND_HEADER = props =>
  props.theme.colors.headerBackground;
export const COLOR_TEXT = props => props.theme.colors.font;
export const COLOR_FONT = props => props.theme.colors.fonts;
export const COLOR_GREEN = props => props.theme.colors.green;
export const COLOR_RED = props => props.theme.colors.red;
export const COLOR_ORANGE = props => props.theme.colors.orange;
export const COLOR_ACCENT = props => props.theme.colors.accent;

// BREAKPOINTS
export const DESKTOP_MIN_WIDTH = '1000px';
export const TABLET_MIN_WIDTH = '500px';

// FONT FAMILIES
export const FONT_FAMILY = props => `${props.theme.fontFamily}, sans-serif`;

// OPACITY
export const OPACITY_NORMAL = 1;
export const OPACITY_PASSIVE = 0.6;
export const OPACITY_DISABLED = 0.3;

// FONT SIZES
export const FONT_SIZE_SMALL = '12px';
export const FONT_SIZE_MEDIUM = '16px';
export const FONT_SIZE_LARGE = '24px';

// BORDERS
export const BORDER_RADIUS = '5px';

// SPACING
export const SPACING_X_SMALL = '5px';
export const SPACING_SMALL = '10px';
export const SPACING_MEDIUM = '20px';
export const SPACING_LARGE = '30px';
export const SPACING_X_LARGE = '80px';

// MISC
export const HEADER_HEIGHT_PX = 70;
export const HEADER_HEIGHT = `${HEADER_HEIGHT_PX}px`;
export const TAG_HEIGHT = '30px';

// ANIMATIONS
export const DURATION_SLOW_MS = 1000;
export const DURATIN_SLOW = `${DURATION_SLOW_MS}ms`;
export const DURATION_MEDIUM_MS = 500;
export const DURATION_MEDIUM = `${DURATION_MEDIUM_MS}ms`;
export const DURATION_FAST_MS = 250;
export const DURATION_FAST = `${DURATION_FAST_MS}ms`;
export const ANIMATION_KEYS = {
  APPEAR: '-appear',
  APPEAR_ACTIVE: '-appear-active',
  ENTER: '-enter',
  ENTER_ACTIVE: '-enter-active',
  LEAVE: '-leave',
  LEAVE_ACTIVE: '-leave-active',
};

export const MED_Z_INDEX = 500;
export const MAX_Z_INDEX = 1000;

export const ICON_DIMENSION_SM = '20px';
