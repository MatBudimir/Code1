## Day 6

### AnimationEvent

AnimationEvent.animationName (Read only)
A string containing the value of the animation-name that generated the animation.

AnimationEvent.elapsedTime (Read only)
A float giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an animationstart event, elapsedTime is 0.0 unless there was a negative value for animation-delay, in which case the event will be fired with elapsedTime containing (-1 * delay).

AnimationEvent.pseudoElement (Read only)
A string, starting with '::', containing the name of the pseudo-element the animation runs on. If the animation doesn't run on a pseudo-element but on the element, an empty string: ''.

### ChangeEvent

### ClipboardEvent

ClipboardEvent.clipboardData (Read only)
A DataTransfer object containing the data affected by the user-initiated cut, copy, or paste operation, along with its MIME type.

### CompositionEvent

### DragEvent

### FocusEvent

### FormEvent

### KeyboardEvent

### MouseEvent

### PointerEvent

### TouchEvent

### TransitionEvent

### WheelEvent

### SyntheticEvent