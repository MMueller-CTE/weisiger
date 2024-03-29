import {
  Style,
  Link,
  TextInput,
  Color,
  Select,
  Shape,
  Image,
  List,
  Number,
} from "@makeswift/runtime/controls"
import ComponentIcon from '@makeswift/runtime'
import { ReactRuntime } from "@makeswift/runtime/react"
import BrandedButton from "../../components/Button"
import { MakeswiftComponentType } from "@makeswift/runtime/components"
import Navbar from "../../components/NavBar/NavBar"
import TaxExemptionCarolina from '../../components/TaxExemptionCarolina'
import TaxExemptionPower from '../../components/TaxExemptionPower'
import TaxExemptionLiftOne from '../../components/TaxExemptionLiftOne'

// Register your components here!

/*
This is the component that changes the standard button out to have a customizable hover color available.
*/
ReactRuntime.registerComponent(BrandedButton, {
  type: MakeswiftComponentType.Button,
  label: 'Branded Button',
  props: {
    linkText: TextInput({ label: "Text", defaultValue: "Enter text..." }),
    link: Link(),
    backgroundColor: Color({ label: "Color", defaultValue: "black" }),
    color: Color({ label: "Text color", defaultValue: "white" }),
    hoverColor: Color({ label: "Hover color", defaultValue: "white" }),
    className: Style({ properties: Style.All }),
  },
})

/*
This is the component for Carolina Cat Tax Exemption button out to have a customizable hover color available.
*/
ReactRuntime.registerComponent(TaxExemptionCarolina, {
  type: 'link',
  label: 'Tax Exemption - Carolina Cat',
  props: {
    linkText: TextInput({ label: "Text", defaultValue: "Enter text..." }),
    link: Link(),
    backgroundColor: Color({ label: "Color", defaultValue: "black" }),
    color: Color({ label: "Text color", defaultValue: "white" }),
    hoverColor: Color({ label: "Hover color", defaultValue: "white" }),
    className: Style({ properties: Style.All }),
  },
})

/*
This is the component for Power Systems Tax Exemption button out to have a customizable hover color available.
*/
ReactRuntime.registerComponent(TaxExemptionPower, {
  type: 'button',
  label: 'Tax Exemption - Power',
  props: {
    linkText: TextInput({ label: "Text", defaultValue: "Enter text..." }),
    link: Link(),
    backgroundColor: Color({ label: "Color", defaultValue: "black" }),
    color: Color({ label: "Text color", defaultValue: "white" }),
    hoverColor: Color({ label: "Hover color", defaultValue: "white" }),
    className: Style({ properties: Style.All }),
  },
})

/*
This is the component for LiftOne Tax Exemption button out to have a customizable hover color available.
*/
ReactRuntime.registerComponent(TaxExemptionLiftOne, {
  type: 'link2',
  label: 'Tax Exemption - LiftOne',
  props: {
    linkText: TextInput({ label: "Text", defaultValue: "Enter text..." }),
    link: Link(),
    backgroundColor: Color({ label: "Color", defaultValue: "black" }),
    color: Color({ label: "Text color", defaultValue: "white" }),
    hoverColor: Color({ label: "Hover color", defaultValue: "white" }),
    className: Style({ properties: Style.All }),
  },
})


/*
This is the component that changes out the standard navigation to a more dynamic navigation
*/
ReactRuntime.registerComponent(Navbar, {
  type: MakeswiftComponentType.Navigation,
  label: "Navigation",
  props: {
    img: Image({ format: Image.Format.WithDimensions }),
    imgAlt: TextInput({ label: "Image alt text", defaultValue: "" }),
    imgLink: Link({ label: "Logo link" }),
    links: List({
      label: "Navigation links",
      type: Shape({
        type: {
          text: TextInput({
            label: "Text",
            defaultValue: "Link",
            selectAll: true,
          }),
          link: Link({ label: "On click (disabled with subnav)" }),
          subnavLinks: List({
            label: "Subnav links",
            type: Shape({
              type: {
                link: Link({ label: "On click" }),
                linkText: TextInput({
                  label: "Text",
                  defaultValue: "Link",
                  selectAll: true,
                }),
              },
            }),
            getItemLabel(subnavLink ) {
              return subnavLink?.linkText || "Link"
            },
          }),
        },
      }),
      getItemLabel(link) {
        return link?.text || "Link"
      },
    }),
    backgroundColor: Color({ label: "Color", defaultValue: "white" }),
    color: Color({ label: "Text color", defaultValue: "black" }),
    className: Style({ properties: [Style.TextStyle] }),
  },
})