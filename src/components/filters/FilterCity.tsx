import { Checkbox, Collapse, CollapseProps, Input, Space, Tooltip } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { memo, useState } from "react";
import { toNonAccentVietnamese } from "../../untils/string";
import { RiSearchLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { getCities, getService } from "./api";

interface Props extends CollapseProps {
  header: string;
  name: string;
  onChangeValue?: (checkedValues: CheckboxValueType[]) => void;
  placeholder?: string;
  autoOpen?: boolean;
  //   rule_eq?: QueryPermissionInput;
}
const FilterCity = memo(
  ({ header, onChangeValue, placeholder, autoOpen = false }: Props) => {
    const { t } = useTranslation("filter");
    const [search, setSearch] = useState("");
    const data = getCities();
    const changeSearch = (value: string) => {
      setSearch(value.trim());
    };

    return (
      <Collapse
        expandIconPosition="end"
        defaultActiveKey={autoOpen ? "1" : "2"}
        className="filter-by-creator"
      >
        <Collapse.Panel header={header} key="1">
          <Input
            placeholder={placeholder ?? t("search")}
            prefix={<RiSearchLine />}
            className="mb-3"
            onChange={(e) => changeSearch(e.target.value)}
          />
          <Checkbox.Group onChange={onChangeValue}>
            <Space direction="vertical">
              {data
                .filter((x: any) =>
                  toNonAccentVietnamese(
                    x?.attributes?.name
                      ? x.attributes?.name.toLocaleLowerCase()
                      : ""
                  ).includes(toNonAccentVietnamese(search.toLocaleLowerCase()))
                )
                .map((value: any) => (
                  <Checkbox key={value?.id} value={value?.id}>
                    <Tooltip placement="right" title={value.attributes?.name}>
                      <span className="line-clamp line-clamp-1">
                        {value.attributes?.name}
                      </span>
                    </Tooltip>
                  </Checkbox>
                ))}
            </Space>
          </Checkbox.Group>
        </Collapse.Panel>
      </Collapse>
    );
  }
);

export default FilterCity;
