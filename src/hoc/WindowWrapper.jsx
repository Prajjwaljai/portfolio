import useWindowStore from "#store/window";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();

    // ✅ SAFE FALLBACK (no early return)
    const {
      isOpen = false,
      isMinimized = false,
      isMaximized = false,
      zIndex = 0,
    } = windows[windowKey] || {};

    const ref = useRef(null);

    // 🔹 OPEN animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      el.style.display = "block";
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen, isMinimized]);

    // 🔹 Drag + focus
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      if (isMaximized) {
        instance.disable();
      } else {
        instance.enable();
      }

      return () => instance.kill();
    }, [isMaximized]);

    // 🔹 Handle open / minimize
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (!isOpen || isMinimized) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
    }, [isOpen, isMinimized]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={`absolute ${isMaximized ? "window-maximized" : ""}`}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
