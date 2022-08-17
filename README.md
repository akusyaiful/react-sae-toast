# react-sae-toast

A react toast library

## Installation

**NPM**

```
npm install @akusyaiful/react-sae-toast
```

**Yarn**

```
yarn add @akusyaiful/react-sae-toast
```

## Getting Started

```javascript
import { SaeToast } from "@akusyaiful/react-sae-toast";
```

## Usage

```javascript
<SaeToast
  open={open}
  message="Hello World"
  type="success"
  position="top-right"
/>
```

### Props

| Name     | Type                                                                                  | Default     | Description                            |
| -------- | ------------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| message  | string                                                                                | -           | The message that will appear           |
| open     | boolean                                                                               | false       | If **true**, the component is shown.   |
| type     | string                                                                                |             | The type of toast component.           |
| position | 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left' | 'top-right' | Side from which the toast will appear. |
