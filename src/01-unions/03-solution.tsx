type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

export function Modal(props: ModalProps) {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    const { title } = props;
    return <div>Title: {title}</div>;
  }
}

export function Test() {
  return (
    <>
      <Modal variant="title" title="Hello" />
      <Modal variant="no-title" />

      {/* @ts-expect-error */}
      <Modal />
      <Modal
        variant="no-title"
        // @ts-expect-error
        title="Wrong"
      />
    </>
  );
}
