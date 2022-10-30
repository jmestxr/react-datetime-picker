# react-datetime-picker
Datetime Picker for React App

## Demo
![demo](https://user-images.githubusercontent.com/87931905/198870330-82bed7cf-f535-453d-8906-c60ee5ae1227.gif)


## Docs

### Props

| Name           | Type                      | Default     | Description                                                                                          |
|----------------|---------------------------|-------------|------------------------------------------------------------------------------------------------------|
| `size`         | `“sm” │ “lg”`             | `“sm”`      | Size of DateTimePicker component                                                                     |
| `dateValue`    | `string`                  | `undefined` | Defines the initial selected date in the format: “DD/MM/YYYY”                                        |
| `timeValue`    | `string`                  | `undefined` | Defines the initial selected time in the format: “HH:MM DayPeriod”                                   |
| `onSelectDate` | `(value: string) => void` | `undefined` | Executes a given JavaScript code when the selected date (passed into the parameter `value`) changes. |
| `onSelectTime` | `(value: string) => void` | `undefined` | Executes a given JavaScript code when the selected time (passed into the parameter `value`) changes. |
