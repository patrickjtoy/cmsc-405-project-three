/**
 * Filename: elements.ts
 * Author: Patrick Toy
 * Description: This file contains functions for creating DOM elements
 */

interface ElementAttributes {
  classList?: Array<string>
  className?: string
  id?: string
  name?: string
  type?: string
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

  el instanceof HTMLInputElement && (el.name = attrs.name)
  el instanceof HTMLInputElement && (el.type = attrs.type || "text")

  return el
}

const appendChildren = (children: Children) => (el: Element) => {
  children.forEach(child => el.appendChild(child))
  return el
}

export const checkbox = (attrs: ElementAttributes) => {
  return setAttrs({ ...attrs, type: "checkbox" })(el("input"))
}

export const div = (attrs: ElementAttributes) => (children: Children) => {
  return appendChildren(children)(setAttrs(attrs)(el("div")))
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
