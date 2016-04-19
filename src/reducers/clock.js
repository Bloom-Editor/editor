export default function clock(state = 0, action) {
  switch (action.type) {
    case "START":
      return state + 1
    case "STOP":
      return state - 1
    case "RESET":
      return 0
    default:
      return state
  }
}
