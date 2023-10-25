type ModalProps = (
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    }
) & {
  color: string;
};

export function Modal(props: ModalProps) {
  if (props.variant === "no-title") {
    return <div style={{ backgroundColor: props.color }}>No title</div>;
  } else {
    return (
      <div style={{ backgroundColor: props.color }}>Title: {props.title}</div>
    );
  }
}

export function Test() {
  return (
    <>
      <Modal variant="title" title="Hello" color="red" />
      <Modal variant="no-title" color="red" />

      {/* @ts-expect-error */}
      <Modal />
      <Modal
        color="red"
        variant="no-title"
        // @ts-expect-error
        title="Wrong"
      />
    </>
  );
}
