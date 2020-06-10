function CustomButton({ children, id }) {
  return (
   <button>
     { children }
     <style jsx>{`
        button {
          background: ${id > 5 ? 'red' : 'green'};
        }
     `}</style>
   </button>
  )
}

export default CustomButton;
