// components/ui/button.jsx
export function Button(props) {
    return <button {...props} className={`p-2 rounded bg-blue-500 text-white ${props.className}`} />
  }
  