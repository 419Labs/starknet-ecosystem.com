import { render } from "@testing-library/react";

import InnerHtml from "./InnerHtml";

describe("<InnerHtml />", () => {
  it("should display sanitized html", () => {
    // Given
    const html = "<div>goodDiv</div><d>invalidDi</d><script>test</script>";
    const container = render(<InnerHtml html={html} />);

    // Then
    expect(
      container.container.innerHTML.includes("<div>goodDiv</div>")
    ).toBeTruthy();
    expect(
      container.container.innerHTML.includes("<d>invalidDi</d>")
    ).toBeFalsy();
    expect(container.container.innerHTML.includes("invalidDi")).toBeTruthy();
    expect(container.container.innerHTML.includes("test")).toBeFalsy();
    expect(container.container.innerHTML.includes("script")).toBeFalsy();
  });
});
