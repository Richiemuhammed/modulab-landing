## Step 2 — Weeks Panel Motion Storyboard

Documented for designers/motion devs.

### State 0 — Idle
- Card centered on soft canvas background
- Subtle shadow, generous white space
- Week 1 + Week 2 already checked
- Week 3 unmarked

Tone: calm, grounded, quiet confidence

### State 1 — Cursor Enters
- Cursor glides in smoothly from the right
- Week 3 row lifts 2–3px
- Shadow deepens slightly
- Accent tint (5–8% opacity) appears behind row

Emotion: anticipation without drama

### State 2 — Click
- Cursor clicks Week 3 row
- Checkmark animates in with micro-bounce
- Accent dot pulses once
- Row returns gently to rest height

Timing: ~180–220 ms, satisfying not playful

### State 3 — Momentum Moment
- Badge fades in on the right (“v0.3 shipped”)
- Whole card nudges upward 1–2px
- Background wash warms slightly

Meaning: progress became real — momentum locked

### State 4 — Rest
- Everything eases back to calm
- No looping
- Feels final, deliberate, inevitable

### Style Notes
- Card: `colors.surface`
- Border: `colors.borderLight`
- Text: `colors.textHigh` / `colors.textMedium`
- Accent pulse: `colors.accent` at 8–12% opacity
- Shadow: soft, wide, minimal contrast

Color is atmosphere, never decoration.

### Microcopy
```
Kin — Build Track
Week 1 — Define constraints
Week 2 — Build core flows
Week 3 — Ship the first real version
Badge: v0.3 shipped
```

Communicates calm cadence → real progress → momentum you can feel.
