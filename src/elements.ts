/**
 * Filename: elements.ts
 * Author: Patrick Toy
 * Description: This file contains functions for creating DOM elements
 */

interface ElementAttributes {
  checked?: boolean
  classList?: Array<string>
  className?: string
  for?: string
  id?: string
  name?: string
  onChange?: (event: Event) => void
  size?: 1 | 2 | 3 | 4 | 5 | 6
  type?: string
  value?: string
}

type Content = Element | HTMLElement | HTMLInputElement | Text
type Children = Array<Content>

const el = document.createElement.bind(document)

const setAttrs = (attrs: ElementAttributes) => (
  el: HTMLElement | HTMLInputElement
) => {
  attrs.classList && el.classList.add(...attrs.classList)
  attrs.className && (el.className = attrs.className)
  attrs.id && (el.id = attrs.id)

  if (el instanceof HTMLLabelElement) {
    attrs.for && el.setAttribute("for", attrs.for)
  }

  if (el instanceof HTMLInputElement) {
    attrs.checked && (el.checked = attrs.checked)
    attrs.name && (el.name = attrs.name)
    attrs.onChange && (el.onchange = attrs.onChange)
    attrs.type && (el.type = attrs.type)
    attrs.value && el.setAttribute("value", attrs.value)
  }

  return el
}

export const appendChildren = (children: Children) => (el: Element) => {
  children.forEach(child => {
    el.appendChild(child)
  })

  return el
}

export const removeChildren = (el: Element) => {
  while (el.hasChildNodes()) {
    el.removeChild(el.lastChild)
  }

  return el
}

export const checkbox = (attrs: ElementAttributes) => {
  return setAttrs({ ...attrs, type: "checkbox" })(el("input"))
}

export const div = (attrs: ElementAttributes) => (children: Children) => {
  return appendChildren(children)(setAttrs(attrs)(el("div")))
}

export const fragment = (children: Children) => {
  return { type: "fragment", children }
}

export const heading = (attrs: ElementAttributes) => (children: Children) => {
  return appendChildren(children)(
    setAttrs(attrs)(el(`h${(attrs.size || 3).toString()}`))
  )
}

export const input = (attrs: ElementAttributes) => {
  return setAttrs({ ...attrs, type: "text" })(el("input"))
}

export const label = (attrs: ElementAttributes) => (children: Children) => {
  return appendChildren(children)(setAttrs(attrs)(el("label")))
}

export const radio = (attrs: ElementAttributes) => {
  return setAttrs({ ...attrs, type: "radio" })(el("input"))
}

export const text = (text: string) => {
  return document.createTextNode(text)
}
