/* @ds-bundle: {"format":4,"namespace":"LakesRegionAIDesignSystem_e86074","components":[{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"TierCard","sourcePath":"components/brand/TierCard.jsx"},{"name":"TierMarker","sourcePath":"components/brand/TierMarker.jsx"},{"name":"Waterline","sourcePath":"components/brand/Waterline.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/SectionHeading.jsx":"219f5804be9d","components/brand/TierCard.jsx":"ef8e406962f9","components/brand/TierMarker.jsx":"46e07fd79563","components/brand/Waterline.jsx":"1973f9168ca8","components/brand/Wordmark.jsx":"bcc1cc11b70a","components/core/Badge.jsx":"d418a3ba9d8a","components/core/Button.jsx":"fcd15b1dcfc2","components/core/Card.jsx":"fe3aa43d269a","components/core/IconButton.jsx":"e4f3f0c2325e","components/core/Tag.jsx":"2656f6b5a0d3","components/feedback/Dialog.jsx":"3cece98ed3d5","components/feedback/Toast.jsx":"04802074df71","components/feedback/Tooltip.jsx":"65400222d5c8","components/forms/Checkbox.jsx":"4622ca4a5181","components/forms/Field.jsx":"0cf2f600177a","components/forms/Input.jsx":"b6c6fd652abe","components/forms/Radio.jsx":"2204a769e6f0","components/forms/Select.jsx":"21070586412e","components/forms/Switch.jsx":"0c9f4f336e4d","components/navigation/NavBar.jsx":"58fb165a53cd","components/navigation/Tabs.jsx":"ec8735306724","ui_kits/collateral/Pieces.jsx":"5ad1038c1be7","ui_kits/website/About.jsx":"cb6f6aa79ca3","ui_kits/website/Contact.jsx":"3ec378a86e11","ui_kits/website/Home.jsx":"a40a4404ea12","ui_kits/website/HomeSections.jsx":"906c8d404688","ui_kits/website/Icon.jsx":"94c9f2b6e84d","ui_kits/website/Services.jsx":"65760d574f55","ui_kits/website/Shell.jsx":"9d8aca1a24a1","ui_kits/website/ShopTalk.jsx":"4fa9d3942560"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LakesRegionAIDesignSystem_e86074 = window.LakesRegionAIDesignSystem_e86074 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/TierMarker.jsx
try { (() => {
function TierMarker({
  tier = 1,
  total = 3,
  tone = "default",
  size = 10,
  showLabel = false,
  style
}) {
  const filled = tone === "inverse" ? "var(--color-white)" : tone === "accent" ? "var(--accent)" : "var(--color-lake-600)";
  const empty = tone === "inverse" ? "rgba(255,255,255,.28)" : "var(--color-lake-100)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      whiteSpace: "nowrap",
      flex: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      gap: size * 0.6
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      background: i < tier ? filled : empty,
      display: "inline-block"
    }
  }))), showLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      flex: "none",
      color: tone === "inverse" ? "rgba(255,255,255,.8)" : "var(--color-lake-700)"
    }
  }, "Tier ", tier) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clip: "rect(0 0 0 0)"
    }
  }, "Tier ", tier, " of ", total));
}
Object.assign(__ds_scope, { TierMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TierMarker.jsx", error: String((e && e.message) || e) }); }

// components/brand/Waterline.jsx
try { (() => {
function Waterline({
  width = "100%",
  tone = "default",
  reflection = true,
  align = "left",
  thickness = 2,
  style
}) {
  const color = tone === "inverse" ? "var(--waterline-inverse)" : tone === "accent" ? "var(--accent)" : tone === "ink" ? "var(--color-ink)" : "var(--waterline)";
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: thickness,
      width,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "100%",
      height: thickness,
      borderRadius: thickness,
      background: color
    }
  }), reflection ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "38%",
      height: thickness,
      borderRadius: thickness,
      background: color,
      opacity: .4
    }
  }) : null);
}
Object.assign(__ds_scope, { Waterline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Waterline.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "default",
  level = 2,
  style
}) {
  const dark = tone === "inverse";
  const Tag = "h" + level;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: 680,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: dark ? "var(--color-lake-300)" : "var(--color-lake-700)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement(__ds_scope.Waterline, {
    width: 48,
    tone: dark ? "inverse" : "default",
    align: align
  })) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: level === 1 ? "var(--text-h1)" : "var(--text-h2)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)",
      lineHeight: "var(--leading-snug)",
      color: dark ? "#fff" : "var(--text-strong)",
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-relaxed)",
      color: dark ? "rgba(255,255,255,.82)" : "var(--text-body)",
      margin: 0
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
const scale = {
  xs: 20,
  sm: 28,
  md: 40,
  lg: 56,
  xl: 80
};
function Plate({
  size,
  bg,
  ink,
  rule,
  border
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    role: "img",
    "aria-label": "Lakes Region AI",
    style: {
      flex: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "112",
    height: "112",
    rx: "12",
    fill: bg,
    stroke: border || "none",
    strokeWidth: border ? 4 : 0
  }), border ? null : /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "13",
    width: "94",
    height: "94",
    rx: "7",
    fill: "none",
    stroke: rule,
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "54",
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontWeight: "600",
    fontSize: "36",
    letterSpacing: "1",
    fill: ink
  }, "LR"), /*#__PURE__*/React.createElement("path", {
    d: "M30 63.5h60",
    stroke: rule,
    strokeWidth: "2.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "95",
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontWeight: "600",
    fontSize: "30",
    letterSpacing: "2",
    fill: ink
  }, "AI"));
}
function Wordmark({
  size = "md",
  tone = "default",
  layout = "horizontal",
  showMark = true,
  showRule = true,
  style
}) {
  const px = scale[size] || scale.md;
  const skins = {
    default: {
      bg: "var(--color-lake-900)",
      ink: "var(--color-granite-100)",
      rule: "var(--color-amber-500)",
      border: null,
      name: "var(--color-ink)",
      tech: "var(--color-lake-600)",
      underline: "var(--color-lake-300)"
    },
    reverse: {
      bg: "var(--color-granite-100)",
      ink: "var(--color-lake-900)",
      rule: "var(--color-amber-500)",
      border: "var(--color-lake-900)",
      name: "var(--color-white)",
      tech: "var(--color-lake-300)",
      underline: "rgba(255,255,255,.4)"
    },
    mono: {
      bg: "var(--color-ink)",
      ink: "var(--color-white)",
      rule: "var(--color-white)",
      border: null,
      name: "var(--color-ink)",
      tech: "var(--color-ink)",
      underline: "var(--color-ink)"
    },
    monoReverse: {
      bg: "var(--color-white)",
      ink: "var(--color-ink)",
      rule: "var(--color-ink)",
      border: "var(--color-ink)",
      name: "var(--color-white)",
      tech: "var(--color-white)",
      underline: "var(--color-white)"
    }
  };
  const s = skins[tone] || skins.default;
  const stacked = layout === "stacked";
  const name = px * 0.56;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: stacked ? "flex-start" : "center",
      flexDirection: stacked ? "column" : "row",
      gap: stacked ? px * 0.28 : px * 0.38,
      ...style
    }
  }, showMark ? /*#__PURE__*/React.createElement(Plate, {
    size: px,
    bg: s.bg,
    ink: s.ink,
    rule: s.rule,
    border: s.border
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: name * 0.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: name * 0.42
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: name,
      lineHeight: 1,
      letterSpacing: ".015em",
      textTransform: "uppercase",
      color: s.name,
      whiteSpace: "nowrap"
    }
  }, "Lakes Region"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: name * 0.74,
      lineHeight: 1,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: s.tech
    }
  }, "AI")), showRule ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      height: 2.5,
      borderRadius: 2,
      background: s.underline,
      width: "100%"
    }
  }) : null));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--surface-subtle)",
      color: "var(--color-lake-800)",
      border: "1px solid var(--color-lake-100)"
    },
    accent: {
      background: "var(--accent-soft)",
      color: "var(--color-amber-800)",
      border: "1px solid #EBD6A6"
    },
    success: {
      background: "var(--status-success-soft)",
      color: "var(--color-pine-700)",
      border: "1px solid #C4DFD1"
    },
    warning: {
      background: "var(--status-warning-soft)",
      color: "var(--color-amber-800)",
      border: "1px solid #EBD6A6"
    },
    error: {
      background: "var(--status-error-soft)",
      color: "var(--color-brick-700)",
      border: "1px solid #EBCCC5"
    },
    inverse: {
      background: "rgba(255,255,255,.12)",
      color: "var(--color-white)",
      border: "1px solid var(--border-inverse)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      whiteSpace: "nowrap",
      flex: "none",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      padding: "3px 9px",
      borderRadius: "var(--radius-xs)",
      ...tones,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 var(--space-4)",
    fontSize: "var(--text-label)"
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 var(--space-5)",
    fontSize: "var(--text-body-sm)"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 var(--space-7)",
    fontSize: "var(--text-body-md)"
  }
};
const variants = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--action-primary-text)",
    border: "1px solid var(--action-primary)",
    boxShadow: "var(--shadow-xs)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--action-secondary-text)",
    border: "1px solid var(--border-default)",
    boxShadow: "var(--shadow-xs)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    border: "1px solid var(--accent)",
    boxShadow: "var(--shadow-xs)"
  },
  ghost: {
    background: "transparent",
    color: "var(--action-secondary-text)",
    border: "1px solid transparent"
  },
  inverse: {
    background: "var(--color-white)",
    color: "var(--color-lake-800)",
    border: "1px solid var(--color-white)"
  }
};
const hovers = {
  primary: {
    background: "var(--action-primary-hover)",
    borderColor: "var(--action-primary-hover)"
  },
  secondary: {
    background: "var(--surface-subtle-alt)",
    borderColor: "var(--border-strong)"
  },
  accent: {
    background: "var(--accent-strong)",
    borderColor: "var(--accent-strong)",
    color: "var(--color-white)"
  },
  ghost: {
    background: "var(--surface-subtle)"
  },
  inverse: {
    background: "var(--color-granite-100)",
    borderColor: "var(--color-granite-100)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconTrailing,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-ui)",
    fontWeight: "var(--weight-semibold)",
    whiteSpace: "nowrap",
    flex: "none",
    letterSpacing: "var(--tracking-snug)",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    transition: "var(--transition-control)",
    transform: press && !disabled ? "translateY(1px)" : "none",
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(disabled ? {
      background: "var(--action-disabled-bg)",
      color: "var(--action-disabled-text)",
      borderColor: "var(--action-disabled-bg)",
      boxShadow: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, icon) : null, children, iconTrailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, iconTrailing) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/TierCard.jsx
try { (() => {
function TierCard({
  tier = 1,
  name,
  summary,
  price,
  priceNote,
  includes = [],
  featured = false,
  cta = "Talk it through",
  onCta,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      padding: "var(--card-pad-lg)",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-card)",
      border: "1px solid " + (featured ? "var(--color-lake-300)" : "var(--border-hairline)"),
      boxShadow: hover ? "var(--shadow-md)" : featured ? "var(--shadow-md)" : "var(--shadow-sm)",
      transition: "box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--stroke-waterline)",
      background: featured ? "var(--accent)" : "var(--waterline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      rowGap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TierMarker, {
    tier: tier,
    showLabel: true
  }), featured ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, "Most chosen") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      letterSpacing: "var(--tracking-snug)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, name), summary ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-2) 0 0"
    }
  }, summary) : null), price ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      fontWeight: "var(--weight-bold)",
      color: "var(--color-lake-800)"
    }
  }, price), priceNote ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-label)",
      color: "var(--text-muted)"
    }
  }, priceNote) : null) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, includes.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--leading-normal)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-lake-600)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    style: {
      flex: "none",
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6.5"
  })), item))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "primary" : "secondary",
    fullWidth: true,
    onClick: onCta,
    style: {
      marginTop: "auto"
    }
  }, cta));
}
Object.assign(__ds_scope, { TierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TierCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = "default",
  padding = "md",
  waterline = false,
  interactive = false,
  as = "div",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const El = as;
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-sm)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "1px solid var(--color-lake-100)",
      boxShadow: "none"
    },
    inverse: {
      background: "var(--surface-inverse)",
      border: "1px solid var(--border-inverse)",
      boxShadow: "none",
      color: "var(--text-inverse)"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    }
  }[tone];
  return /*#__PURE__*/React.createElement(El, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      padding: padding === "none" ? 0 : padding === "lg" ? "var(--card-pad-lg)" : padding === "sm" ? "var(--space-4)" : "var(--card-pad)",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      ...tones,
      ...(interactive && hover ? {
        boxShadow: "var(--shadow-md)",
        transform: "translateY(-2px)"
      } : null),
      ...style
    }
  }, rest), waterline ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--stroke-waterline)",
      background: tone === "inverse" ? "var(--waterline-inverse)" : "var(--waterline)"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const skin = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--color-white)",
      border: "1px solid var(--action-primary)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--color-slate-600)",
      border: "1px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-slate-600)",
      border: "1px solid transparent"
    }
  }[variant];
  const hoverSkin = {
    primary: {
      background: "var(--action-primary-hover)",
      borderColor: "var(--action-primary-hover)"
    },
    secondary: {
      background: "var(--surface-subtle-alt)",
      borderColor: "var(--border-strong)"
    },
    ghost: {
      background: "var(--surface-subtle)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      ...skin,
      ...(hover && !disabled ? hoverSkin : null),
      ...(disabled ? {
        opacity: .45
      } : null),
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  icon,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      whiteSpace: "nowrap",
      flex: "none",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--weight-medium)",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      cursor: clickable ? "pointer" : "default",
      transition: "var(--transition-control)",
      background: selected ? "var(--color-lake-600)" : "var(--surface-card)",
      color: selected ? "var(--color-white)" : "var(--color-slate-600)",
      border: "1px solid " + (selected ? "var(--color-lake-600)" : "var(--border-default)"),
      ...(hover && clickable && !selected ? {
        background: "var(--surface-subtle)",
        borderColor: "var(--color-lake-300)"
      } : null),
      ...style
    }
  }, rest), icon, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      fontSize: 14,
      lineHeight: 1,
      opacity: .6
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(18,48,74,.42)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      animation: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--stroke-waterline)",
      background: "var(--waterline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--card-pad-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 20,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-body)",
      margin: "var(--space-3) 0 0"
    }
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end"
    }
  }, footer) : null)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  info: {
    accent: "var(--color-lake-600)",
    icon: "i"
  },
  success: {
    accent: "var(--status-success)",
    icon: "✓"
  },
  warning: {
    accent: "var(--status-warning)",
    icon: "!"
  },
  error: {
    accent: "var(--status-error)",
    icon: "!"
  }
};
function Toast({
  title,
  message,
  tone = "info",
  onDismiss,
  style
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      width: 360,
      maxWidth: "100%",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "none",
      width: 22,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: t.accent,
      color: "#fff",
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, title), message ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-body)",
      marginTop: 2,
      lineHeight: "var(--leading-normal)"
    }
  }, message) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = "top"
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      zIndex: 40,
      background: "var(--color-ink)",
      color: "var(--color-granite-50)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-medium)",
      padding: "5px 9px",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--shadow-sm)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style
}) {
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const on = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onClick: toggle,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "none",
      width: 18,
      height: 18,
      marginTop: description ? 2 : 0,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--action-primary)" : "var(--surface-card)",
      border: "1px solid " + (on ? "var(--action-primary)" : "var(--border-strong)"),
      transition: "var(--transition-control)"
    }
  }, on ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6.5"
  })) : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: on,
    disabled: disabled,
    onChange: () => {},
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-strong)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--color-slate-700)",
      letterSpacing: "var(--tracking-snug)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-error)",
      marginLeft: 3
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--status-error)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  size = "md",
  prefix,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const box = {
    width: "100%",
    fontFamily: "var(--font-ui)",
    fontSize: "var(--text-body-sm)",
    color: "var(--text-strong)",
    background: "var(--surface-card)",
    borderRadius: "var(--radius-sm)",
    border: "1px solid " + (invalid ? "var(--status-error)" : focus ? "var(--focus-ring)" : "var(--border-default)"),
    boxShadow: focus ? "var(--shadow-focus)" : "none",
    outline: "none",
    padding: multiline ? "10px 12px" : "0 12px",
    height: multiline ? "auto" : size === "sm" ? "var(--control-h-sm)" : size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)",
    lineHeight: multiline ? "var(--leading-normal)" : "normal",
    transition: "var(--transition-control)",
    ...style
  };
  const El = multiline ? "textarea" : "input";
  const field = /*#__PURE__*/React.createElement(El, _extends({
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: box
  }, rest));
  if (!prefix) return field;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      display: "inline-flex",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, prefix), React.cloneElement(field, {
    style: {
      ...box,
      paddingLeft: 36
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name = "radio",
  direction = "column",
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value !== undefined ? value : internal;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? "var(--space-6)" : "var(--space-3)",
      ...style
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    const description = typeof o === "string" ? null : o.description;
    const on = current === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        if (value === undefined) setInternal(v);
        onChange && onChange(v);
      },
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: description ? "flex-start" : "center",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: "none",
        width: 18,
        height: 18,
        marginTop: description ? 2 : 0,
        borderRadius: "var(--radius-pill)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface-card)",
        border: "1px solid " + (on ? "var(--action-primary)" : "var(--border-strong)"),
        transition: "var(--transition-control)"
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "var(--radius-pill)",
        background: "var(--action-primary)"
      }
    }) : null), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      onChange: () => {},
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-body-sm)",
        color: "var(--text-strong)"
      }
    }, label), description ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-caption)",
        color: "var(--text-muted)"
      }
    }, description) : null));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  size = "md",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid " + (invalid ? "var(--status-error)" : focus ? "var(--focus-ring)" : "var(--border-default)"),
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      padding: "0 34px 0 12px",
      height: size === "sm" ? "var(--control-h-sm)" : size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style
}) {
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const on = checked !== undefined ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    },
    onClick: () => {
      if (disabled) return;
      if (checked === undefined) setInternal(!on);
      onChange && onChange(!on);
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 40,
      height: 22,
      borderRadius: "var(--radius-pill)",
      padding: 2,
      flex: "none",
      background: on ? "var(--action-primary)" : "var(--color-slate-200)",
      transition: "background-color var(--dur-base) var(--ease-out)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transform: on ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: () => {},
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-strong)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = "Book a walkthrough",
  onCta,
  tone = "light",
  phone = "(603) 707-0720",
  style
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      flexWrap: "wrap",
      rowGap: "var(--space-4)",
      padding: "var(--space-5) var(--gutter)",
      background: dark ? "var(--surface-inverse)" : "var(--surface-card)",
      borderBottom: "1px solid " + (dark ? "var(--border-inverse)" : "var(--border-hairline)"),
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "sm",
    tone: dark ? "reverse" : "default"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      rowGap: "var(--space-3)",
      flex: "1 1 auto",
      minWidth: 0
    }
  }, links.map(l => {
    const on = l === active;
    const __hrefs = (arguments[0] && arguments[0].hrefs) || {};
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: __hrefs[l] || "#",
      onClick: e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onNavigate && onNavigate(l);
      },
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-body-sm)",
        whiteSpace: "nowrap",
        flex: "none",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: dark ? on ? "#fff" : "rgba(255,255,255,.78)" : on ? "var(--color-lake-800)" : "var(--text-body)",
        textDecoration: "none",
        paddingBottom: 2,
        boxShadow: on ? "inset 0 -2px 0 0 " + (dark ? "var(--accent)" : "var(--action-primary)") : "none"
      }
    }, l);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      whiteSpace: "nowrap",
      flex: "none",
      color: dark ? "rgba(255,255,255,.7)" : "var(--text-muted)"
    }
  }, phone), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "inverse" : "primary",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const first = tabs.length ? typeof tabs[0] === "string" ? tabs[0] : tabs[0].value : undefined;
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : first);
  const current = value !== undefined ? value : internal;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-7)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, tabs.map(t => {
    const v = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    const on = current === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        if (value === undefined) setInternal(v);
        onChange && onChange(v);
      },
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: "0 0 12px",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-body-sm)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: on ? "var(--color-lake-800)" : "var(--text-body)",
        boxShadow: on ? "inset 0 -2px 0 0 var(--action-primary)" : "none",
        transition: "var(--transition-control)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/Pieces.jsx
try { (() => {
const {
  Wordmark,
  Waterline,
  Badge,
  TierMarker,
  TierCard,
  Button,
  Card
} = window.LakesRegionAIDesignSystem_e86074;

// 3.5 x 2 in at 96dpi = 336 x 192
function BusinessCardFront() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 336,
      height: 192,
      background: "var(--surface-inverse)",
      borderRadius: 6,
      position: "relative",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/winnipesaukee-watermark.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -70,
      bottom: -40,
      width: 300,
      opacity: .16,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 24,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "sm",
    tone: "reverse"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 700,
      color: "#fff",
      letterSpacing: "-.015em",
      lineHeight: 1.3,
      maxWidth: 230
    }
  }, "AI for the businesses your town runs on."), /*#__PURE__*/React.createElement(Waterline, {
    width: 40,
    tone: "inverse",
    reflection: false,
    style: {
      marginTop: 10
    }
  }))));
}
function BusinessCardBack() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 336,
      height: 192,
      background: "var(--surface-page-alt)",
      borderRadius: 6,
      boxShadow: "var(--shadow-md)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-.015em"
    }
  }, "Matt Alighieri"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11.5,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, "Owner")), /*#__PURE__*/React.createElement(Waterline, {
    width: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-body)",
      display: "grid",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", null, "(603) 707-0720"), /*#__PURE__*/React.createElement("span", null, "matt@lakesregionai.com"), /*#__PURE__*/React.createElement("span", null, "Belknap Street, Laconia NH"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-lake-700)"
    }
  }, "lakesregionai.com")));
}
function EmailSignature() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      borderRadius: 8,
      padding: 20,
      width: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 14
    }
  }, "Email signature"), /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "top",
      paddingRight: 14,
      borderRight: "2px solid var(--waterline)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark.svg",
    width: "44",
    height: "44",
    alt: "Lakes Region AI"
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "top",
      paddingLeft: 14,
      fontFamily: "var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Matt Alighieri"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, "Owner \xB7 Lakes Region AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-body)",
      marginTop: 8,
      lineHeight: 1.6
    }
  }, "(603) 707-0720 \xB7 matt@lakesregionai.com", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-lake-700)"
    }
  }, "lakesregionai.com"), " \xB7 Laconia, NH"))))));
}
function Avatars() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      alignItems: "flex-end"
    }
  }, [[96, "Profile"], [56, "Comment"], [32, "Favicon"], [16, "Tab"]].map(([s, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark.svg",
    width: s,
    height: s,
    alt: "",
    style: {
      borderRadius: s * 0.23
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, s, "px \xB7 ", l))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 999,
      overflow: "hidden",
      display: "grid",
      placeItems: "center",
      background: "#2F6FA3"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark.svg",
    width: "96",
    height: "96",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, "circle crop")));
}
Object.assign(window, {
  BusinessCardFront,
  BusinessCardBack,
  EmailSignature,
  Avatars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/Pieces.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  Waterline,
  Button,
  Badge,
  Wordmark
} = window.LakesRegionAIDesignSystem_e86074;
function About({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".95fr 1.05fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      borderRadius: "var(--radius-lg)",
      background: "linear-gradient(150deg,#E7E1D8,#D8D1C4)",
      border: "1px solid var(--border-hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-label)",
      color: "var(--text-muted)",
      textAlign: "center",
      padding: "var(--space-6)"
    }
  }, "Photo placeholder \u2014 Matt at the counter of a Lakes Region business, warm natural light, no filter"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who you'd be working with",
    title: "Matt Alighieri.",
    lead: "I grew up around here and I've spent fifteen years building systems for companies much larger than yours. The tools got good enough that a nine-person shop can use them too \u2014 but nobody was showing up to do it."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      marginTop: "var(--space-5)"
    }
  }, "So that's the whole business. I drive out, I watch how the work moves, and I set up two or three things that give you your evenings back. You call me directly when something needs changing. There's no account manager and no ticket queue."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-7)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate("Contact")
  }, "Book a walkthrough"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Call (603) 707-0720"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How we work",
    title: "Four things we hold to."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-9)"
    }
  }, [["Plain language", "If we can't explain it at your counter in two minutes, we won't build it."], ["Flat prices", "Written down before we start. No hourly surprises, no change orders."], ["You own it", "Every account, every document, every automation is in your name."], ["We say no", "If AI isn't the answer, we'll tell you that and not charge you for the visit."]].map(([t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "lg",
    waterline: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-3) 0 0"
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    tight: true,
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-300)"
    }
  }, "Also from Matt Alighieri"), /*#__PURE__*/React.createElement(Waterline, {
    width: 48,
    tone: "inverse",
    style: {
      margin: "var(--space-4) 0"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      color: "#fff",
      margin: 0,
      letterSpacing: "-.02em"
    }
  }, "New England Growth Studio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-lg)",
      color: "rgba(255,255,255,.82)",
      maxWidth: 560,
      marginTop: "var(--space-3)"
    }
  }, "Separate practice, separate clients: growth work for the region's outdoor economy. Same person, same standards \u2014 different offer. If that's closer to what you need, we'll send you there.")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg"
  }, "Visit NEGS"))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Card,
  Field,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  SectionHeading,
  Waterline,
  Toast,
  Badge,
  TierMarker
} = window.LakesRegionAIDesignSystem_e86074;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "Dave Robichaud",
    business: "Weirs Auto & Tire",
    phone: "(603) 707-0720",
    town: "Laconia",
    how: "call",
    tier: "Set It Up",
    notes: ""
  });
  const set = k => e => setForm({
    ...form,
    [k]: e && e.target ? e.target.value : e
  });
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get in touch",
    title: "Tell us about your week.",
    lead: "Two minutes of typing, or just call. Either way you'll hear back the same business day."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    waterline: true,
    style: {
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.name,
    onChange: set("name")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Business name",
    required: true,
    hint: "However it appears on your sign."
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.business,
    onChange: set("business")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.phone,
    onChange: set("phone")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Town"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.town,
    onChange: set("town"),
    options: ["Laconia", "Meredith", "Gilford", "Wolfeboro", "Tilton", "Belmont", "Moultonborough", "Alton", "Somewhere else nearby"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "What eats up the most time each week?",
    hint: "One or two sentences is plenty."
  }, /*#__PURE__*/React.createElement(Input, {
    multiline: true,
    rows: 4,
    placeholder: "Answering the phone when both bays are full.",
    value: form.notes,
    onChange: set("notes")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "How should we reach you?"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "how",
    value: form.how,
    onChange: v => setForm({
      ...form,
      how: v
    }),
    options: [{
      label: "Call me",
      value: "call"
    }, {
      label: "Text me",
      value: "text"
    }, {
      label: "Email me",
      value: "email"
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Which tier are you thinking?",
    hint: "A guess is fine \u2014 we'll tell you if it's the wrong one."
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "tier",
    value: form.tier,
    onChange: v => setForm({
      ...form,
      tier: v
    }),
    options: ["Get Started", "Set It Up", "Run It For You", "No idea yet"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the weekly one-pager",
    description: "Two short items a week about what's working for local businesses. Unsubscribe any time.",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Waterline, {
    style: {
      margin: "var(--space-7) 0 var(--space-6)"
    },
    reflection: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setSent(true)
  }, "Send it over"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Call (603) 707-0720"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, "We don't share your information. Ever.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-700)"
    }
  }, "The office"), /*#__PURE__*/React.createElement(Waterline, {
    width: 40,
    reflection: false,
    style: {
      margin: "var(--space-3) 0 var(--space-5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, [["phone", "(603) 707-0720"], ["mail", "matt@lakesregionai.com"], ["map-pin", "Belknap Street, Laconia NH"], ["clock", "Mon–Fri 7:30–5:00 · Sat by appointment"]].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-lake-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "var(--text-strong)"
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "What happens next"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: "var(--space-4) 0 0",
      padding: "0 0 0 var(--space-5)",
      display: "grid",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Matt calls you back, same business day."), /*#__PURE__*/React.createElement("li", null, "We pick a time and he drives to you."), /*#__PURE__*/React.createElement("li", null, "You get a one-page plan with a flat price on it."))), sent ? /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Message sent",
    message: "Matt will call (603) 707-0720 today. Nothing else needed from you.",
    onDismiss: () => setSent(false),
    style: {
      width: "100%"
    }
  }) : null)));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Badge,
  Waterline,
  SectionHeading,
  TierCard,
  TierMarker,
  Wordmark
} = window.LakesRegionAIDesignSystem_e86074;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/winnipesaukee-watermark.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -120,
      top: 40,
      width: 720,
      opacity: .13,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-13) var(--gutter) var(--space-12)",
      display: "grid",
      gridTemplateColumns: "1.15fr .85fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-300)"
    }
  }, "Laconia, New Hampshire"), /*#__PURE__*/React.createElement(Waterline, {
    width: 56,
    tone: "inverse",
    style: {
      margin: "var(--space-4) 0 var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-1)",
      fontWeight: 800,
      letterSpacing: "-.03em",
      lineHeight: "var(--leading-tight)",
      color: "#fff",
      margin: 0,
      maxWidth: 620
    }
  }, "AI for the businesses your town runs on."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,.85)",
      maxWidth: 520,
      margin: "var(--space-6) 0 var(--space-8)"
    }
  }, "No jargon, no sales pitch, no out-of-state price tag. We find the two or three jobs eating your week, set up systems that handle them, and show your people how to use them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNavigate("Contact")
  }, "Book a walkthrough"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "#fff",
      border: "1px solid rgba(255,255,255,.35)"
    },
    onClick: () => onNavigate("What we do")
  }, "See the three tiers"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "rgba(255,255,255,.7)"
    }
  }, "or call (603) 707-0720"))), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    padding: "lg",
    style: {
      background: "rgba(255,255,255,.07)",
      backdropFilter: "blur(3px)"
    },
    waterline: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-300)"
    }
  }, "What that looks like"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "var(--space-5) 0 0",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, ["The phone gets answered at 7 p.m. and the job gets booked.", "Quotes follow themselves up on day three.", "Friday's invoices go out Thursday, on their own.", "You get one short summary a week. That's it."].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-normal)",
      color: "rgba(255,255,255,.92)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    style: {
      flex: "none",
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6.5"
  })), t))))));
}
function TrustBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-6) var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, "Working with businesses in"), ["Laconia", "Meredith", "Gilford", "Wolfeboro", "Tilton", "Moultonborough"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      fontWeight: 700,
      color: "var(--color-lake-800)",
      letterSpacing: "-.01em"
    }
  }, t))));
}
function WhatWeDo() {
  const items = [["file-text", "Quotes and follow-ups", "Estimates written from your notes, then followed up on day three without you remembering."], ["receipt", "Invoices and paperwork", "Recurring invoices, reminders, and the monthly reconciliation your bookkeeper keeps asking about."], ["inbox", "The inbox", "Sorts what needs you from what doesn't, drafts the routine replies in your words."], ["calendar-check", "Scheduling", "Fills cancellations from the waitlist. Confirms the day before. Cuts the no-shows."], ["clipboard-list", "Your own stuff", "The spreadsheet only you understand, the process that lives in your head. We start there."]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What else we do",
    title: "Plain work, done properly.",
    lead: "The phone is where most people start. These are the other five. You'll recognize at least two of them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-9)"
    }
  }, items.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    padding: "lg",
    waterline: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-lake-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      margin: "var(--space-4) 0 var(--space-2)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: 0
    }
  }, body)))));
}
function HowItWorks() {
  const steps = [["We come to you", "An hour at your counter or in your truck. We watch how the work actually moves and write down where it snags."], ["We build the two or three things", "Small systems, live in two weeks. You approve everything before it talks to a customer."], ["We train your people, then stay reachable", "Your staff learns it in one sitting. When something needs changing, you call a 603 number and get Matt."]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "mist"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "Three visits, then it runs without you.",
    lead: "No discovery phase, no statement of work you need a lawyer to read."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, steps.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-card)",
      border: "1px solid var(--color-lake-100)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--color-lake-800)",
      flex: "none"
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-2) 0 0"
    }
  }, b)))))));
}
const TIERS = [{
  tier: 1,
  name: "Get Started",
  price: "$750",
  priceNote: "one time",
  summary: "One afternoon, one problem solved, nothing ongoing.",
  includes: ["A two-hour sit-down at your shop", "One automation built and running", "A one-page written plan for the rest", "Thirty days of questions answered"],
  cta: "Start here"
}, {
  tier: 2,
  name: "Set It Up",
  price: "$2,400",
  priceNote: "then $180/mo",
  featured: true,
  summary: "The common one. Two or three systems, built and handed over.",
  includes: ["Everything in Get Started", "Two to three automations, live in two weeks", "Staff training at your shop", "Monthly check-in and adjustments", "Weekly one-page summary"],
  cta: "Talk it through"
}, {
  tier: 3,
  name: "Run It For You",
  price: "$650",
  priceNote: "per month",
  summary: "We hold the keys, watch the queues, and fix things before you notice.",
  includes: ["Everything in Set It Up", "We own the day-to-day operation", "Same-week changes on request", "Quarterly review with your books in hand", "Direct line to Matt"],
  cta: "See if it fits"
}];
function Tiers({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What it costs",
    title: "Three ways in. Pick the smallest one that helps.",
    lead: "Flat prices, written down before we start. No per-seat anything."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-9)",
      alignItems: "stretch"
    }
  }, TIERS.map(t => /*#__PURE__*/React.createElement(TierCard, _extends({
    key: t.name
  }, t, {
    onCta: () => onNavigate("Contact")
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-muted)",
      marginTop: "var(--space-6)",
      maxWidth: 620
    }
  }, "If it doesn't earn its keep in the first month, we shut it off and you stop paying. Not sure which one? Call and describe your week \u2014 if we're not the right fit we'll say so and point you somewhere better."));
}
function Proof() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr .8fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Waterline, {
    width: 56
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 26,
      lineHeight: 1.45,
      color: "var(--text-strong)",
      margin: "var(--space-6) 0 var(--space-6)",
      fontStyle: "normal"
    }
  }, "\"I didn't want a dashboard. I wanted the phone answered when both bays are full. Matt set that up in a week and it books three or four jobs a night now.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Dave R. \xB7 Weirs Auto & Tire, Laconia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, "Tier 2 \xB7 customer since 2025")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, [["19", "local businesses running with us"], ["2 weeks", "typical time from handshake to live"], ["603", "the area code you'll be calling"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "baseline",
      paddingBottom: "var(--space-4)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      fontWeight: 800,
      color: "var(--color-lake-700)",
      letterSpacing: "-.03em"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-body)"
    }
  }, l))))));
}
function ClosingCta({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "mist",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      letterSpacing: "-.025em",
      margin: 0
    }
  }, "Thirty minutes on site."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      color: "var(--text-body)",
      margin: "var(--space-3) 0 0"
    }
  }, "Bring your worst week. We'll tell you what we'd fix first.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate("Contact")
  }, "Book a walkthrough"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Call (603) 707-0720"))));
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(SeasonBand, null), /*#__PURE__*/React.createElement(Receptionist, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(WhatWeDo, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Tiers, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Headwaters, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(StraightAnswers, null), /*#__PURE__*/React.createElement(ShopTalkTeaser, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(ClosingCta, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  Home,
  Tiers,
  TIERS,
  Hero,
  TrustBar,
  ClosingCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Waterline,
  SectionHeading
} = window.LakesRegionAIDesignSystem_e86074;
function SeasonBand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-inverse-alt)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Waterline, {
    width: 56,
    tone: "inverse",
    style: {
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-display)",
      lineHeight: 1.2,
      margin: 0,
      color: "#fff"
    }
  }, "We know your June is Bike Week and your April is nothing. Built for a business that does half its year in twelve weeks.")));
}
function Receptionist({
  onNavigate
}) {
  const transcript = [["them", "Hey — do you guys do trailer tires?"], ["us", "We do. Are you looking to get one mounted today, or price it out first?"], ["them", "Today if you can. I'm on 106 heading toward Belmont."], ["us", "We've got a bay at 3:15. Want me to hold it? I'll need a name and the tire size if you have it."]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr .95fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Running today"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-2)",
      lineHeight: "var(--leading-snug)",
      margin: "var(--space-5) 0 0"
    }
  }, "The one that answers the phone."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-5) 0 var(--space-6)",
      maxWidth: 520
    }
  }, "This is the system most people start with, and it's already running for shops in Laconia and Gilford. It picks up on the second ring, asks what a good front-desk person would ask, books the job into your calendar, and texts you the details. After hours, during the rush, in the middle of an install."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 var(--space-7)",
      display: "grid",
      gap: "var(--space-3)"
    }
  }, ["It answers from your own website and price list — not a script somebody wrote in California.", "Your customers hear a normal voice, not a phone tree.", "If it can't help, it hands off to you — it doesn't loop.", "Nobody gets replaced. Your front desk stops doing the part they hate."].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    style: {
      flex: "none",
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6.5"
  })), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Call it yourself: (603) 707-0720"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Ask it anything. It's a real line."))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      background: "var(--surface-subtle-alt)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-700)"
    }
  }, "An actual call, last Tuesday"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, transcript.map(([who, line], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: who === "us" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "84%",
      padding: "var(--space-4) var(--space-5)",
      borderRadius: "var(--radius-md)",
      background: who === "us" ? "var(--color-lake-700)" : "var(--surface-card)",
      color: who === "us" ? "#fff" : "var(--text-strong)",
      border: who === "us" ? "none" : "1px solid var(--border-hairline)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-normal)"
    }
  }, line)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-hairline)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, "Booked. Owner got a text with the name, the size, and the bay time."))));
}
function StraightAnswers() {
  const qs = [["\u201cWill it sound like a robot to my customers?\u201d", "No, and you get to hear it before anyone else does. You approve every word it says before it ever picks up a call. If it can't help someone, it says so plainly and gets you \u2014 it doesn't put them in a loop."], ["\u201cAm I firing somebody?\u201d", "Nobody gets replaced. Every business we've set up has the same people in it. What changes is that they stop retyping the same message forty times a week."], ["\u201cI'm not a computer person.\u201d", "Good \u2014 that's the job. You don't get a dashboard to learn. You get one short summary a week and a phone number that reaches a person in Laconia."], ["\u201cWhat if it doesn't work?\u201d", "If it doesn't earn its keep in the first month, we shut it off and you stop paying. No contract, no cancellation call with somebody in another state."]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Straight answers",
    title: "The five things everybody asks.",
    lead: "Usually in the first ten minutes, usually apologetically. They're fair questions."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.15fr",
      gap: "var(--space-9)",
      alignItems: "start",
      marginTop: "var(--space-9)",
      paddingTop: "var(--space-6)",
      borderTop: "3px solid var(--color-lake-700)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      margin: 0
    }
  }, "\u201CHow does it know the ins and outs of my business?\u201D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Because you feed it. It learns from your own material \u2014 your website, your price list, your service area, the way you already describe the work. It answers from that, not from a script somebody wrote in California."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-4) 0 0"
    }
  }, "If your site says you don't work on diesels, it won't book one. If your season starts Memorial Day, it knows that. If you charge a trip fee past Meredith, it says so before the customer gets surprised. That's why it sounds like your shop instead of a phone tree \u2014 it's repeating you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-muted)",
      margin: "var(--space-4) 0 0"
    }
  }, "Most businesses have written down more than they think. If you've got a website, we're already halfway there."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0,1fr))",
      gap: "var(--space-6) var(--space-8)",
      marginTop: "var(--space-9)"
    }
  }, qs.map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      paddingTop: "var(--space-5)",
      borderTop: "2px solid var(--color-lake-600)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      margin: 0
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-3) 0 0"
    }
  }, a)))));
}
function Headwaters({
  onNavigate
}) {
  const rows = [["Where it came from", "Every call, form, and walk-in tagged to what sent them \u2014 the sign, the referral, the truck, the listing."], ["What it turned into", "Which of those became a quote, which became a job, and what the job was actually worth."], ["What they're worth over time", "The customer who spends $400 once versus the one who spends $400 every spring for nine years."]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    tight: true
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      background: "var(--surface-inverse)",
      border: "none",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/winnipesaukee-watermark.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -100,
      top: -40,
      width: 480,
      opacity: .1,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: ".85fr 1.15fr",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-300)"
    }
  }, "Add-on \xB7 Tier 2 and 3"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      color: "#fff",
      margin: "var(--space-4) 0 0"
    }
  }, "Headwaters"), /*#__PURE__*/React.createElement(Waterline, {
    width: 56,
    tone: "inverse",
    style: {
      margin: "var(--space-4) 0 var(--space-5)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,.88)",
      margin: 0
    }
  }, "Know which jobs are worth chasing."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,.72)",
      margin: "var(--space-4) 0 var(--space-6)"
    }
  }, "Every river around here starts somewhere small. Same with your work \u2014 it all came from somewhere, and most people never find out where. This traces it back."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-body-lg)",
      color: "#fff"
    }
  }, "$240", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "rgba(255,255,255,.7)"
    }
  }, " /mo, on top of your tier")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    style: {
      marginTop: "var(--space-6)"
    },
    onClick: () => onNavigate && onNavigate("Contact")
  }, "Ask about Headwaters")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, rows.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-5)",
      alignItems: "start",
      paddingBottom: "var(--space-5)",
      borderBottom: i < rows.length - 1 ? "1px solid var(--border-inverse)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: 600,
      color: "var(--accent)",
      flex: "none",
      width: 34
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      color: "#fff",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,.78)",
      margin: "var(--space-2) 0 0"
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "rgba(255,255,255,.62)",
      margin: 0
    }
  }, "Nobody needs this in month one. Most people ask for it about six months in, when they want to know whether the sign on Route 3 is doing anything.")))));
}
Object.assign(window, {
  SeasonBand,
  Receptionist,
  StraightAnswers,
  Headwaters
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// Lucide icons, loaded from CDN (see readme ICONOGRAPHY). Renders an <i data-lucide> and lets
// lucide.createIcons() swap it for the real SVG at 1.75 stroke.
function Icon({
  name,
  size = 20,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '<i data-lucide="' + name + '"></i>';
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        "stroke-width": 1.75
      }
    });
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  Card,
  Tag,
  SectionHeading,
  Waterline,
  Button,
  Badge,
  TierCard,
  TierMarker
} = window.LakesRegionAIDesignSystem_e86074;
const BY_INDUSTRY = {
  "Trades": {
    line: "Plumbers, electricians, HVAC, excavation, landscaping.",
    jobs: [["phone-call", "Answer the phone from the ladder", "Calls answered and jobs booked while you're on a roof in Gilford."], ["file-text", "Quotes out the same night", "Dictate on the drive home; the estimate goes out before dinner."], ["calendar-check", "Fill the cancellations", "The waitlist gets texted the moment a slot opens."]],
    quote: ["We stopped losing the 4:30 calls.", "Sanborn Plumbing & Heating, Meredith"]
  },
  "Restaurants": {
    line: "Diners, pubs, seasonal spots, catering.",
    jobs: [["phone-call", "Reservations during the rush", "Nobody leaves the line to pick up the phone."], ["clipboard-list", "Prep lists that write themselves", "Yesterday's covers set today's par levels."], ["users", "Scheduling around the season", "Summer staffing that doesn't take your Sunday."]],
    quote: ["July finally stopped feeling like a fire drill.", "The Lakeside Room, Wolfeboro"]
  },
  "Real estate": {
    line: "Agents, brokerages, property managers, short-term rentals.",
    jobs: [["inbox", "Lead follow-up that doesn't lapse", "Every inquiry answered in five minutes, in your voice."], ["file-text", "Listing copy in your style", "Drafted from your notes and photos, ready to edit."], ["receipt", "Turnover and cleaning coordination", "Bookings, cleaners, and reminders in one thread."]],
    quote: ["I answer showings, not email.", "Winnipesaukee Shore Realty, Laconia"]
  },
  "Professional services": {
    line: "Accountants, insurance, law offices, clinics, contractors' offices.",
    jobs: [["inbox", "Intake without the phone tag", "Clients answer six questions before they ever reach you."], ["receipt", "Invoices and reminders", "Out on time, chased politely, reconciled monthly."], ["clipboard-list", "Document handling", "Files named, filed, and findable a year from now."]],
    quote: ["Tax season with two fewer temps.", "Belknap Tax & Bookkeeping, Tilton"]
  },
  "Retail": {
    line: "Hardware, gift, garden centers, marinas, auto parts.",
    jobs: [["phone-call", "\"Do you have it in stock?\"", "Answered accurately, all day, without leaving the register."], ["clipboard-list", "Reorder points that hold", "Watches what moves and tells you before you're out."], ["calendar-check", "Seasonal hours everywhere at once", "One change updates the phone, the site, and the listings."]],
    quote: ["The phone stopped interrupting customers.", "Weirs Hardware, Laconia"]
  }
};
function Services({
  onNavigate
}) {
  const [industry, setIndustry] = React.useState("Trades");
  const data = BY_INDUSTRY[industry];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Same three tiers. Different week.",
    lead: "The work depends on your trade. Pick yours \u2014 these are the jobs we usually take off the owner's plate first."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(BY_INDUSTRY),
    value: industry,
    onChange: setIndustry
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, data.jobs.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    padding: "lg",
    waterline: true,
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-lake-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      margin: "var(--space-4) 0 var(--space-2)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: 0
    }
  }, body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-label)",
      color: "var(--text-muted)"
    }
  }, data.line), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-strong)"
    }
  }, "\"", data.quote[0], "\""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, "\u2014 ", data.quote[1]))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What it costs",
    title: "Three ways in. Pick the smallest one that helps.",
    lead: "Flat prices, written down before we start."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-9)"
    }
  }, TIERS.map(t => /*#__PURE__*/React.createElement(TierCard, _extends({
    key: t.name
  }, t, {
    onCta: () => onNavigate("Contact")
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "mist",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Common questions",
    title: "The things people ask on the phone."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6) var(--space-10)",
      marginTop: "var(--space-8)"
    }
  }, [["Will it talk to my customers like a robot?", "No. Everything customer-facing gets written in your words and approved by you before it goes live. You can shut it off from your phone."], ["Do I need new software?", "Usually not. We work with the phone, email and scheduling you already have."], ["What if I want out?", "Month to month after the build. You keep everything we set up and the written documentation."], ["Are you local, actually?", "Laconia. We drive to Wolfeboro, Meredith, Tilton and Moultonborough every week."]].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      margin: 0
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-2) 0 0"
    }
  }, a))))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  Wordmark,
  Waterline,
  Button,
  NavBar
} = window.LakesRegionAIDesignSystem_e86074;
function Footer({
  onNavigate
}) {
  const towns = ["Laconia", "Meredith", "Gilford", "Wolfeboro", "Tilton", "Belmont", "Moultonborough", "Alton"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/winnipesaukee-watermark.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -80,
      bottom: -60,
      width: 560,
      opacity: .12,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-11) var(--gutter) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md",
    tone: "reverse"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,.8)",
      maxWidth: 330,
      marginTop: "var(--space-5)"
    }
  }, "AI for the businesses your town runs on. Based in Laconia, working across the Lakes Region.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-300)"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement(Waterline, {
    width: 40,
    tone: "inverse",
    reflection: false,
    style: {
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "rgba(255,255,255,.85)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "(603) 707-0720"), /*#__PURE__*/React.createElement("span", null, "matt@lakesregionai.com"), /*#__PURE__*/React.createElement("span", null, "Belknap Street, Laconia"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.6)"
    }
  }, "Mon\u2013Fri 7:30\u20135:00"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-300)"
    }
  }, "Where we work"), /*#__PURE__*/React.createElement(Waterline, {
    width: 40,
    tone: "inverse",
    reflection: false,
    style: {
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2) var(--space-4)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-label)",
      color: "rgba(255,255,255,.85)"
    }
  }, towns.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-inverse)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "rgba(255,255,255,.6)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Lakes Region AI \xB7 A New Hampshire company"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("Shop Talk");
    },
    style: {
      color: "rgba(255,255,255,.75)"
    }
  }, "Shop Talk"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("Contact");
    },
    style: {
      color: "rgba(255,255,255,.75)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "rgba(255,255,255,.75)"
    }
  }, "Privacy")))));
}
function Section({
  children,
  tone = "page",
  tight = false,
  style
}) {
  const bg = {
    page: "var(--surface-page)",
    alt: "var(--surface-page-alt)",
    mist: "var(--surface-subtle)",
    inverse: "var(--surface-inverse)",
    card: "var(--surface-card)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: (tight ? "var(--section-y-tight)" : "var(--section-y)") + " 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, children));
}
Object.assign(window, {
  Footer,
  Section,
  SiteNav: NavBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShopTalk.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Waterline,
  SectionHeading,
  Tag
} = window.LakesRegionAIDesignSystem_e86074;
const POSTS = [{
  kind: "video",
  len: "4 min",
  date: "Sep 10, 2026",
  town: "Gilford",
  title: "\u201cWhat happens if it books two guys into the same slot?\u201d",
  teaser: "Somebody asked me this at the Chamber breakfast. Short answer: it can't, and here's the thirty seconds of setup that makes sure.",
  featured: true
}, {
  kind: "video",
  len: "6 min",
  date: "Sep 3, 2026",
  town: "Laconia",
  title: "I let it answer my own phone for a week. Here's every call.",
  teaser: "Twenty-two calls. Nineteen handled, three handed to me. I read the transcripts out loud, including the one it got wrong."
}, {
  kind: "written",
  len: "3 min read",
  date: "Aug 27, 2026",
  town: "Meredith",
  title: "The four things a plumber's phone gets asked all summer",
  teaser: "Pulled from real call logs. If you know the four, you can answer three of them without picking up."
}, {
  kind: "written",
  len: "5 min read",
  date: "Aug 19, 2026",
  town: "Wolfeboro",
  title: "What Bike Week does to a two-man shop's calendar",
  teaser: "Nine days of June is a quarter of the year. What we set up in May so nobody works a 14-hour Thursday."
}, {
  kind: "video",
  len: "5 min",
  date: "Aug 12, 2026",
  town: "Tilton",
  title: "Reading a quote follow-up out loud, line by line",
  teaser: "The day-three text that recovers about one job in five. I'll show you the exact wording and why every word is in there."
}, {
  kind: "written",
  len: "4 min read",
  date: "Aug 5, 2026",
  town: "Laconia",
  title: "Nobody got fired. Here's what actually changed at the front desk.",
  teaser: "Three businesses, a year in. What the person at the counter does now that they didn't before."
}];
function PostMeta({
  p,
  tone = "light",
  compact = false
}) {
  const muted = tone === "inverse" ? "rgba(255,255,255,.7)" : "var(--text-muted)";
  const item = {
    whiteSpace: "nowrap",
    flex: "none"
  };
  const dot = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...item,
      opacity: .5
    }
  }, "\xB7");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      columnGap: "var(--space-3)",
      rowGap: 4,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: muted
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...item,
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontWeight: 600,
      color: tone === "inverse" ? "var(--accent)" : "var(--color-lake-700)",
      textTransform: "uppercase",
      letterSpacing: ".08em"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.kind === "video" ? "play-circle" : "file-text",
    size: 13
  }), p.kind === "video" ? "Video" : "Written"), dot, /*#__PURE__*/React.createElement("span", {
    style: item
  }, compact ? p.len.replace(" read", "") : p.len), dot, /*#__PURE__*/React.createElement("span", {
    style: item
  }, p.town), dot, /*#__PURE__*/React.createElement("span", {
    style: item
  }, compact ? p.date.replace(", 2026", "") : p.date));
}
function PostCard({
  p
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, p.kind === "video" ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      borderRadius: "var(--radius-md)",
      background: "linear-gradient(150deg,var(--color-lake-800),var(--color-lake-900))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,.14)",
      border: "1.5px solid rgba(255,255,255,.5)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 10,
      right: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "rgba(255,255,255,.8)"
    }
  }, p.len)) : /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-subtle)",
      border: "1px solid var(--border-hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-5)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, "Photo placeholder \u2014 the shop or the job this post is about"), /*#__PURE__*/React.createElement(PostMeta, {
    p: p,
    compact: true
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: 0
    }
  }, p.teaser));
}
function ShopTalkTeaser({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Shop Talk",
    title: "One real question, answered properly.",
    lead: "Somebody asks me something at a counter or a Chamber breakfast, and I film the answer or write it down. No tips, no trends \u2014 just the question and what I actually told them.",
    style: {
      maxWidth: 620
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate && onNavigate("Shop Talk")
  }, "All of it")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-9)"
    }
  }, POSTS.slice(0, 3).map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.title,
    p: p
  }))));
}
function ShopTalk({
  onNavigate
}) {
  const [filter, setFilter] = React.useState("Everything");
  const tabs = ["Everything", "Video", "Written"];
  const shown = POSTS.filter(p => filter === "Everything" || (filter === "Video" ? p.kind === "video" : p.kind === "written"));
  const hero = POSTS[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-12) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-300)"
    }
  }, "Shop Talk"), /*#__PURE__*/React.createElement(Waterline, {
    width: 56,
    tone: "inverse",
    style: {
      margin: "var(--space-4) 0 var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-2)",
      lineHeight: "var(--leading-snug)",
      color: "#fff",
      margin: 0,
      maxWidth: 520
    }
  }, "One real question, answered properly."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,.85)",
      maxWidth: 480,
      margin: "var(--space-5) 0 var(--space-7)"
    }
  }, "Somebody asks me something at a counter or a Chamber breakfast, and I film the answer or write it down. Every one of these came from an actual conversation with an actual business in this area."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => onNavigate && onNavigate("Contact")
  }, "Ask me something"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "rgba(255,255,255,.7)"
    }
  }, "or call (603) 707-0720"))), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    padding: "lg",
    style: {
      background: "rgba(255,255,255,.07)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Newest"), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      borderRadius: "var(--radius-md)",
      background: "linear-gradient(150deg,rgba(255,255,255,.14),rgba(255,255,255,.04))",
      border: "1px solid rgba(255,255,255,.22)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,.16)",
      border: "1.5px solid rgba(255,255,255,.55)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 22
  }))), /*#__PURE__*/React.createElement(PostMeta, {
    p: hero,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      color: "#fff",
      margin: "var(--space-3) 0 var(--space-3)"
    }
  }, hero.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,.8)",
      margin: 0
    }
  }, hero.teaser)))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginBottom: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      padding: "10px 18px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      border: "1.5px solid " + (filter === t ? "var(--color-lake-700)" : "var(--border-default)"),
      background: filter === t ? "var(--color-lake-700)" : "transparent",
      color: filter === t ? "#fff" : "var(--text-body)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--space-6)"
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.title,
    p: p
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "mist",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why I bother",
    title: "Every one of these makes the phone smarter."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-5) 0 0"
    }
  }, "The system that answers your phone learns from what's written down. So every question I answer here is a question it can already answer for a customer at 7 p.m. \u2014 in the same words I'd use standing in your shop. The writing isn't marketing. It's the training.")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-lake-700)"
    }
  }, "Got a question?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: "var(--space-4) 0 var(--space-6)"
    }
  }, "If you've wondered it, three other shops in Laconia have too. Ask and I'll answer it here \u2014 no name attached if you'd rather."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate && onNavigate("Contact")
  }, "Send it over"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Call (603) 707-0720"))))));
}
Object.assign(window, {
  ShopTalk,
  ShopTalkTeaser,
  PostCard,
  POSTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShopTalk.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TierCard = __ds_scope.TierCard;

__ds_ns.TierMarker = __ds_scope.TierMarker;

__ds_ns.Waterline = __ds_scope.Waterline;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
