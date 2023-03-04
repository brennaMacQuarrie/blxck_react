export default function Button(props) {
    return (
      <button className='rounded border-white-[1px]'>
        {props.children}
      </button>
    );
  }